import { Module } from "@nestjs/common";
import { HelloController } from "./hello.controller";

// 모듈 데코레이터 / @Module은 모듈을 설정할 때 사용하는 데코레이터입니다. 몇 가지 설정이 있으나 여기서는 controllers만 설정합니다. controllers에는 배열로 모듈에 포함된 컨트롤러들을 설정합니다.
// 현재는 HelloController 하나만 설정합니다.
@Module({
  controllers: [HelloController],
})
export class HelloModule {}
