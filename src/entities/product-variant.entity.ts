import { Field, ObjectType } from '@nestjs/graphql';
import { ProductVariantImage } from './product-variant-image.entity';

@ObjectType()
export class ProductVariant {
  @Field()
  id: string;

  @Field(() => [ProductVariantImage])
  images: ProductVariantImage[];
}
