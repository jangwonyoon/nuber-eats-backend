import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';

/* GraphQLModule을 가져와서 forRoot()함수로 루트 모듈을 설정 

아무런 정보 없이 GraphQL 서버만 만들 수 없다.
반드시 gql의 스키마와 resolver가 필요하다.


nestjs doc에서 code fist의 

GraphQLModule.forRoot({
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
}) 을 적용


autoSchemaFile: true,을 통해 gql을 생성 하지 않아도 된다.

*/

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
