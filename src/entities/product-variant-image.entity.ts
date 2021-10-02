import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductVariantImage {
  @Field()
  id: string;

  @Field()
  imageKey: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field({ nullable: true })
  imageUrl2?: string;

  @Field({ nullable: true })
  imageUrl3?: string;
}
