import { SampleService } from './sample.service';
import { SampleController } from './sample.controller';
import { Module } from "@nestjs/common";

@Module({
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule {}