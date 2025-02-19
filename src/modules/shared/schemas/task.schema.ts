import {TaskStatus} from '@enums/task.enum';
import {ApiProperty} from '@nestjs/swagger';
import {IsDate, IsEnum, IsNotEmpty, IsOptional} from 'class-validator';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID of the task', example: 1 })
  id: number;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ description: 'Title of the task', example: 'My Task' })
  title: string;

  @Column({ nullable: true })
  @IsOptional()
  @ApiProperty({
    description: 'Description of the task',
    example: 'This is a task description',
    required: false,
  })
  description?: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  @IsEnum(TaskStatus)
  @ApiProperty({
    description: 'Status of the task',
    enum: TaskStatus,
    example: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @Column({ type: 'timestamp', nullable: true })
  @IsOptional()
  @IsDate()
  @ApiProperty({
    description: 'Due date of the task in ISO format',
    example: '2023-12-31T23:59:59.999Z',
    required: false,
  })
  dueDate?: Date;
}
