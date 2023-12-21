import { NestFactory } from "@nestjs/core";
import { HelloModule } from "./hello.module";

// 1. NestJS를 시작시키는 함수
async function bootstrap() {
  // 2. NestFactory를 사용해서 NestApplication 객체 생성
  const app = await NestFactory.create(HelloModule);
  // 3. 3000번 포트로 서버 기동
  await app.listen(3000, () => {
    console.log("서버 시작!");
  });
}

bootstrap();

// 1. 어떤 프로그램이든 최초로 실행되는 함수가 필요합니다. NestJS의 서버 역시 기동하려면 최초 실행되는 함수, 즉 최초 진입점이 필요합니다. NestJS에서는 진입점을 bootstrap()으로 이름 짓는 것이 관례입니다.

// 2. NestFactory는 사실 NestFactoryStatic 클래스이며 create()함수에 루트 모듈을 넣어서 NestApplication 객체를 생성합니다. NestApplication 객체에는 HTTP 부분을 모듈화한
//    HTTPAdapter가 있습니다. 기본적으로는 익스프레스가 사용됩니다.

// 3. listen()함수는 HTTP 어댑터로 무엇을 쓰느냐에 따라 다르겠지만, 여기서는 기본값인 익스프레스의 app.listen() 함수입니다. NestJS의 애플리케이션을 실행하는 코드가 익스프레스와 같습니다.
