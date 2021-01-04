## **사전 지식**

### 라이브러리 VS 프레임워크

내가 코드를 컨트롤 하는 지 VS 누군가의 규칙을 따라 코딩을 하는 지 

- **라이브러리 : 우리가 필요할 때 코드를 부르는 것 (예시 : jQuery), 코딩을 하면서 내가 필요할 때 부른다.**

    > 라이브러리: 코딩하는 과정에서 필요에 의해서 내가 컨트롤 하는 경우

- **프레임워크 : 프레임워크가 우리를 부른다. 프레임워크로 업무하는 경우에는 프레임워크의 규칙을 따라야 한다.  (예시: 장고 , Nest.js)**

    > 프레임워크 : 프레임워크가 어디에 코드를 넣어야하는지 알려준다. 프레임워트가 지정한 규칙에 따라 코딩을 해야한다.

***`하지만 라이브러리와 프레임워크는 그 둘의 경계가 뚜렷한 것은 아니다. (예시:React 라이브러리이면서 , 프레임워크 기능을 가지고 있다. )`*** 

# #1. 강의 QUIZ

### QUIZ 1) NestJS is a framework or a library?

**NestJS is a framework** for building efficient and scalable Node. js server-side applications built with and fully supporting TypeScript. It uses robust HTTP Server **frameworks** like Express or Fastify. Nest provides a level of abstraction above the common Node.

> NestJS는 효율적이며 확장 가능한 Node.js 서버 측 애플리케이션을 빌드하기 위한 프레임워크이며 TS를 완벽하게 지원합니다. Express 또는 Fastify와 같은 강력한 HTTP 서버 프레임워크를 사용합니다. Nest는 공통 노드 위에 추상화 수준을 제공합니다.

### QUIZ 2) What is the difference between a framework and a library?

The technical difference between a framework and library lies in a term called inversion of control. When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow.

<img width="615" alt="#2" src="https://user-images.githubusercontent.com/33803975/103532975-a21df080-4ecf-11eb-9714-adb80d6d26c5.png">

## Library:

It is just a *collection* of *routines* (functional programming) or *class definitions*(object oriented programming). The reason behind is simply *code reuse*, i.e. get the code that has already been written by other developers. The classes or routines normally define *specific operations in a domain specific area*. For example, there are some libraries of mathematics which can let developer just call the function without redo the implementation of how an algorithm works.

## Framework:

In framework, all the *control flow* is already there, and *there are a bunch of predefined white spots* that we should *fill out with our code*. A framework is normally more complex. It *defines a skeleton where* the application defines its own features to fill out the skeleton. In this way, your code will be called by the framework when appropriately. The benefit is that developers do not need to worry about if a design is good or not, but just about implementing domain specific functions.

### QUIZ 3) NestJS can run on top of what?

Another impressive feature of NestJS is that, it can run on top of express or fastify frameworks. You don't have to change you API's code for that. If you want to access any native framework features of express / fastify, it is possible.

**NestJS의 특징은 Express와 fastify 위에서 작동이 가능합니다. 이를 위해 API의 코드를 변경할 필요가 없습니다. Express/fastify의 기본 프레임워크 기능에 액세스하려는 경우 가능합니다.** 

> Express or fastify

### QUIZ 4) What is the biggest problem of NodeJS that NestJS is solving?

> Architecture, NodeJS projects lack structure.

### QUIZ 5) What is the purpose of a decorator?

By definition, a decorator is a function that takes another function and extends the behavior of the latter function without explicitly modifying it. 

데코레이터는 명시적으로 수정하지 않고 기능의 동작을 확장하고 다른 기능을 취하는 기능입니다. 

> It's a function that adds functionality to classes or members of the class.

### QUIZ 6) What is the job of the 'AppModule'?

<img width="672" alt="#6" src="https://user-images.githubusercontent.com/33803975/103533084-d4c7e900-4ecf-11eb-9508-d24227868901.png">

각각의 기능을 담당하는 Controller와 Proviers는 기능 모듈 별로 Module Decorator 에 등록되고 이 모듈들은 App Module에 import하여 최종적으로 NestFactory로 create 되는 플로우를 가지고 있다고 생각하면 된다.

> The AppModule is the module that imports all other modules.

**Reference : [https://medium.com/crocusenergy/nestjs-modules-개념-및-실습-758b1328e9e7](https://medium.com/crocusenergy/nestjs-modules-%EA%B0%9C%EB%85%90-%EB%B0%8F-%EC%8B%A4%EC%8A%B5-758b1328e9e7)**

### QUIZ 7) What is the job of a Controller?

**Controllers : controller는 들어오는 request를 handling하고, response를 클라이언트에게 되돌려주는 책임을 가지고 있습니다.

컨트롤러는 어플리케이션에 요청되는 특정 request를 받기 위해서 만들었습니다. 각각의 controller는 적어도 1개의 route를 가지며, 각각의 route들은 각자 다른 action으로 동작합니다. 

기본 controller를 만들기 위해서, 우리는 Decorater를 사용합니다. 데코레이터는 클래스를 필요한 메타데이터와 연결하고 Nest.js를 사용하여 routing 맵을 가능하게 해줍니다. ( request와 연관된 controller를 연결시켜주는 역할을 합니다. )**

<img width="512" alt="#7" src="https://user-images.githubusercontent.com/33803975/103533090-d7c2d980-4ecf-11eb-9766-fbb358391c41.png">


> A controller takes a request to a URL and will execute a function.

**Reference:  [https://velog.io/@odysseyj/NestJS-NestJS-공식문서-따라해보기-Controllers-msk4smtppe](https://velog.io/@odysseyj/NestJS-NestJS-%EA%B3%B5%EC%8B%9D%EB%AC%B8%EC%84%9C-%EB%94%B0%EB%9D%BC%ED%95%B4%EB%B3%B4%EA%B8%B0-Controllers-msk4smtppe)**

### QUIZ 8) Functions on the controllers and on the services have to have the same name.

> False

### QUIZ 9) What is the job of the service?

> A service handles the business logic.

### QUIZ 10 ) Who should access the DB, the controller or the service?

> service

## #1. ARCHITECTURE OF NESTJS 강의 개념

**NestJS**는 main.ts 파일을 가지며, 무조건 이 이름이여야만 한다. 

**데코레이터** : 클래스에 함수 기능을 추가 할 수 있다. 데코레이터는 꾸며주는 함수나 클래스와 **`반드시`** 붙어있어야한다. 

**컨트롤러** : 기본적으로 URL을 가져오고 함수를 실행시킨다. node.js에서 express의 라우터와 비슷한 존재라고 생각하면 된다. 즉 URL을 가져와 함수를 매핑한다.

**서비스: 컨트롤러는 URL을 가져오는 역할뿐 비지니스 로직은 모두 서비스로 간다. 서비스는 일반적으로 실제의 function을 가지는 부분이다.** 

**AppModule: 우리가 하는 모든 것을 Import한다.**