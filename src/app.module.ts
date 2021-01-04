import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

/* GraphQLModule을 가져와서 forRoot()함수로 루트 모듈을 설정 

아무런 정보 없이 GraphQL 서버만 만들 수 없다.
반드시 gql의 스키마와 resolver가 필요하다.


nestjs doc에서 code fist의 

GraphQLModule.forRoot({
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
}) 을 적용


autoSchemaFile: true,을 통해 gql을 생성 하지 않아도 된다.

*/

/* Postgres는 localhost연결에서는 password를 추적하지 않는다. */

/* ConfigModule에서 isGlobal은 우리의 애플리케이션의 어디서나 config 모듈에 접근할 수 있다는 거다.
  
  npm i cross-env 설치를 통해서 나의 환경이 macOS이던지 , Window이던지 Linux이던지 상관없이 쓸 수 있게 해준다. 

*/

/* 
  서버에 deploy 할 때 환경변수 파일을 사용하지 않는다. process.env.NODE_ENV === prod


  validationSchema를 통해 내가 원하는 모든 환경 변수의 유효성을 검사할 수 있다. 
*/

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
    }),
    RestaurantsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
