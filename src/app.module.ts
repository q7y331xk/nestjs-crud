import { SampleModule } from './sample/sample.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configOptions from './shared/app-options/config-options';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DefaultModule } from './default/default.module';

@Module({
  imports: [ConfigModule.forRoot(configOptions),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.AWS_RDS_HOST,
    username: process.env.AWS_RDS_USERNAME,
    password: process.env.AWS_RDS_SECRET,
    database: process.env.AWS_RDS_DB_NAME,
    autoLoadEntities: true,
    synchronize: process.env.NODE_ENV === 'dev' ? true : false,
    namingStrategy: new SnakeNamingStrategy(),
    legacySpatialSupport: false,
  }),
    DefaultModule,
    SampleModule,
    ]
})
export class AppModule{}