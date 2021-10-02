import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { readFileSync } from 'fs';
import express from 'express';
import {
  generateImageUrl,
  generateImageUrl2,
  generateImageUrl3,
  products,
  withFieldResolvers,
} from './utils';
import { ProductVariantImage } from './entities/product-variant-image.entity';
import { execFile } from 'child_process';
import { join } from 'path';

async function attachPureApolloExpress(app: INestApplication) {
  const pureServer = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs: readFileSync('./src/generated-schema.gql', {
        encoding: 'utf-8',
      }),
      resolvers: {
        Query: {
          getProducts: async () => {
            return products;
          },
        },
        ProductVariantImage: withFieldResolvers
          ? {
              imageUrl: (parent: ProductVariantImage) => {
                return generateImageUrl(parent.imageKey);
              },
              imageUrl2: (parent: ProductVariantImage) => {
                return generateImageUrl2(parent.imageKey);
              },
              imageUrl3: (parent: ProductVariantImage) => {
                return generateImageUrl3(parent.imageKey);
              },
            }
          : {},
      },
    }),
  });
  await pureServer.start();
  pureServer.applyMiddleware({
    app: app.getHttpAdapter().getInstance() as express.Application,
    path: '/graphql-pure',
  });
}

async function runLoadtests() {
  return new Promise((resolve, reject) => {
    execFile(join(process.cwd(), './load-test.sh'), (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await attachPureApolloExpress(app);

  await app.listen(3339);

  console.log(
    `Launching simple load test WithFieldResolvers: ${withFieldResolvers}`,
  );
  const loadResults = await runLoadtests();
  console.log(loadResults);
  process.exit(0);
}
bootstrap();
