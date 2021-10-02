import { Query, Resolver } from '@nestjs/graphql';
import { Product } from '../entities/product.entity';
import { products } from '../utils';

@Resolver()
export class ProductResolver {
  @Query(() => [Product])
  async getProducts(): Promise<Product[]> {
    // return generateProducts();
    return products;
  }
}
