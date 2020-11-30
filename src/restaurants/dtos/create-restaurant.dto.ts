import { Field, InputType, Args, ArgsType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
/* Data transfer  object */

@ArgsType()
export class CreateRestaurantDto {
  @Field((type) => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field((type) => Boolean)
  isVegan: boolean;

  @Field((type) => String)
  @IsString()
  address: string;

  @Field((type) => String)
  @IsString()
  @Length(5, 10)
  ownersName: string;
}

/* @InputType은 그저 하나의 object이다.

 @ArgsType은 기본적으로 분리된 값들을 GraphQL argument로 전달해 줄 수 있도록 해준다.

*/

/* npm i class-validator로 모듈을 가져오고 
    dto 유효성 검사를 실시 한다. 

    main.ts에 아래 구문을 작성

    app.useGlobalPipes(new ValidationPipe());

    npm i class-transformer 넣기 
*/
