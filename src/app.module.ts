import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductResolver } from './resolvers/product.resolver';
import { ProductVariantImageResolver } from './resolvers/product-variant-image.resolver';
import { withFieldResolvers } from './utils';

const providers = withFieldResolvers
  ? [ProductResolver, ProductVariantImageResolver]
  : [ProductResolver];

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './src/generated-schema.gql',
    }),
  ],
  providers: providers,
})
export class AppModule {}
