import { Injectable } from "@nestjs/common";

@Injectable()
export class SampleService {
  create(test: any) {
    return 'test'
  }
}