import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Todo } from "../../todo/todo.entity";
@Entity()
export class User {

    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
  @OneToMany(() => Todo, todo => todo.user)
  todos: Todo[];
}
