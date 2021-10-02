import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProductVariantImage } from '../entities/product-variant-image.entity';
import {
  generateImageUrl,
  generateImageUrl2,
  generateImageUrl3,
} from '../utils';

@Resolver(() => ProductVariantImage)
export class ProductVariantImageResolver {
  @ResolveField(() => String, { nullable: true })
  imageUrl(@Parent() parent: ProductVariantImage) {
    return generateImageUrl(parent.imageKey);
  }

  @ResolveField(() => String, { nullable: true })
  imageUrl2(@Parent() parent: ProductVariantImage) {
    return generateImageUrl2(parent.imageKey);
  }

  @ResolveField(() => String, { nullable: true })
  imageUrl3(@Parent() parent: ProductVariantImage) {
    return generateImageUrl3(parent.imageKey);
  }
}
