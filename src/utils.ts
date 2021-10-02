import { Product } from './entities/product.entity';
import * as faker from 'faker';

export const withFieldResolvers = process.env.WITH_FIELD_RESOLVERS === 'true';

export const generateProducts = (): Product[] => {
  return Array.from({ length: 10 }).map(() => ({
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    variants: Array.from({ length: 60 }).map(() => ({
      id: faker.datatype.uuid(),
      images: Array.from({ length: 5 }).map(() => ({
        id: faker.datatype.uuid(),
        imageKey: faker.datatype.string(10),
      })),
    })),
  }));
};

export const products = generateProducts();

export const generateImageUrl = (imageKey: string, prefix = '') =>
  `https://abc${prefix}.com/${imageKey}`;

export const generateImageUrl2 = (imageKey: string) =>
  generateImageUrl(imageKey, '2');
export const generateImageUrl3 = (imageKey: string) =>
  generateImageUrl(imageKey, '3');
