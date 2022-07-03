import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum REMOVED {
  KEEP = 0,
  REMOVE = 1,
  HOLD = 2,
}

export abstract class Core {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export abstract class CoreWithSoftRemoved extends Core {  
  @Column({type: 'tinyint'})
  removed: REMOVED;
}