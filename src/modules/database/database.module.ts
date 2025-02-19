import { typeOrmConfig } from '@app/core/config/database/type-orm.config';
import { Task } from '@modules/shared/schemas/task.schema';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Task]),
  ],
})
export class DatabaseModule {}
