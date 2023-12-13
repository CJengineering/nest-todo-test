import { Injectable, NotFoundException} from '@nestjs/common';
import { TodoProps } from './todo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { User } from 'src/user/entities/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService{
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        const user = await this.userRepository.findOne({
            where: { id: createTodoDto.userId },
          });
        if (!user) {
          throw new NotFoundException('User not found');
        }
    
        const todo = this.todoRepository.create(createTodoDto);
        todo.user = user;
        return this.todoRepository.save(todo);
      }
    async findAll(): Promise<Todo[]> {
        return this.todoRepository.find();
      }
}