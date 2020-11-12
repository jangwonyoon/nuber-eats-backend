import { Module } from '@nestjs/common';
import { RestaurantResover } from './restaurants.resolver';

@Module({
  providers: [RestaurantResover],
})
export class RestaurantsModule {}
