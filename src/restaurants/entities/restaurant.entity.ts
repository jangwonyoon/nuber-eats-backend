import { ObjectType, Field } from '@nestjs/graphql';

/* entity는 데이터베이스의 모델이라 생각하면 된다. */

@ObjectType()
export class Restaurant {
  @Field((type) => String)
  name: string;

  @Field((type) => Boolean)
  isVegan?: boolean;

  @Field((type) => String)
  address: string;

  @Field((type) => String)
  ownerName: string;
}
