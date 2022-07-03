import { Sample } from './../entities/sample.entity';
import { PartialType } from '@nestjs/mapped-types';


export default class UpdateSampleDto extends PartialType(Sample) {}