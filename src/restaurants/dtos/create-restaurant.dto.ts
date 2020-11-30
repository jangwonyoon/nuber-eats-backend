import { Field, InputType, Args, ArgsType } from '@nestjs/graphql';

/* Data transfer  object */

@ArgsType()
export class CreateRestaurantDto {
  @Field((type) => String)
  name: string;
  @Field((type) => Boolean)
  isVegan: boolean;
  @Field((type) => String)
  address: string;
  @Field((type) => String)
  ownersName: string;
}

/* @InputType은 그저 하나의 object이다.

 @ArgsType은 기본적으로 분리된 값들을 GraphQL argument로 전달해 줄 수 있도록 해준다.

*/
