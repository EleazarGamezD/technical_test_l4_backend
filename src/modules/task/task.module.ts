import { LuxonDatePipe } from '@core/pipes/luxon-date.pipe';
import { Task } from '@modules/shared/schemas/task.schema';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './controllers/task.controller';
import { TaskService } from './services/task.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService, LuxonDatePipe],
})
export class TaskModule {}
