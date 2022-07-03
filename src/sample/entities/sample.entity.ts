import { IsString } from "class-validator";
import { Core } from "src/shared/types/core.entities";
import { Column, Entity } from "typeorm";

@Entity()
export class Sample extends Core {
  @Column()
  @IsString()
  sampleName: string;
}