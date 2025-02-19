import { LuxonDatePipe } from '@core/pipes/luxon-date.pipe';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { TaskService } from '../services/task.service';
import { IPaginate } from '@core/interfaces/paginate.interface';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  create(@Body(new LuxonDatePipe()) createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    return this.taskService.create(createTaskDto);
  }

  @Get('all')
  findAll(@Query() pagination: IPaginate) {
    return this.taskService.findAll(pagination);
  }

  @Get('get/:id')
  findOne(@Param('id') id: number) {
    return this.taskService.findOne(id);
  }

  @Put('update/:id')
  update(
    @Param('id') id: number,
    @Body(new LuxonDatePipe()) updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    this.taskService.remove(id);
    return 'Task deleted successfully';
  }
}
