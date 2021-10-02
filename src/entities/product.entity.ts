import { ObjectType, Field } from '@nestjs/graphql';
import { ProductVariant } from './product-variant.entity';

@ObjectType()
export class Product {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => [ProductVariant])
  variants: ProductVariant[];
}
