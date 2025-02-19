import { TaskStatus } from '@enums/task.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Title of the task',
    example: 'My Task',
    required: true,
  })
  title: string;

  @IsOptional()
  @ApiProperty({
    description: 'Description of the task',
    example: 'This is a task description',
    required: true,
  })
  description?: string;

  @IsEnum(TaskStatus)
  @ApiProperty({
    description: 'Status of the task',
    enum: TaskStatus,
    example: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Due date of the task in ISO format',
    example: '2023-12-31T23:59:59.999Z',
    required: false,
  })
  dueDate?: string;
}
