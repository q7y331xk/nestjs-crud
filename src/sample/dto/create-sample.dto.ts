import { Sample } from './../entities/sample.entity';
import { PickType } from '@nestjs/mapped-types';

export class CreateSampleDto extends PickType(Sample, ['sampleName']) {}