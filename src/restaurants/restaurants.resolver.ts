import { Resolver, Query, Args } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantResover {
  @Query((returns) => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log(veganOnly);
    return [];
  }
}

/* 쿼리는 첫 인자로 함수를 필요로 한다.*/
