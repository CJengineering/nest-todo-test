import {
  Controller,
  Get,
  Post,
  Body,
  Logger,
  Param,
  ParseIntPipe,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoProps } from './todo.interface';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  private readonly logger = new Logger(TodoController.name);
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    this.logger.log('Handling create() request...');
    try {
      return await this.todoService.create(createTodoDto);
    } catch (error) {
      throw new HttpException('Failed to create todo', HttpStatus.BAD_GATEWAY);
    }
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    this.logger.log('Handling findAll() request...');
    try {
      return await this.todoService.findAll();
    } catch (error) {
      this.logger.error('Error in findAll():', error);
      throw new HttpException(
        'Failed to retrieve todos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
