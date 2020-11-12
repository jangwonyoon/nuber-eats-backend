import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class RestaurantResover {
  @Query(() => Boolean)
  isPizzaGood(): Boolean {
    return true;
  }
}

/* 쿼리는 첫 인자로 함수를 필요로 한다.*/
