import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { Todo } from './todo/todo.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'nest-test-db',
  entities: [User, Todo],
  synchronize: false,
});
