import { CustomException } from '@core/exceptions-custom/custom-exception';
import { IPaginate } from '@core/interfaces/paginate.interface';
import { Task } from '@modules/shared/schemas/task.schema';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TaskService {
  logger = new Logger(TaskService.name);
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    this.logger.log('createTaskDto', createTaskDto);
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  }

  async findAll(
    pagination: IPaginate,
  ): Promise<{ tasks: Task[]; total: number }> {
    const { page, limit } = pagination;

    this.logger.log('pagination', page, limit);
    const [result, total] = await this.taskRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { tasks: result, total };
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      this.logger.error(`Task with id ${id} not found`);
      throw new CustomException(`Task with id ${id} not found`);
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    await this.taskRepository.update(id, updateTaskDto);
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      this.logger.error(`Task with id ${id} not found`);
      throw new CustomException(`Task with id ${id} not found`);
    }
    return task;
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
