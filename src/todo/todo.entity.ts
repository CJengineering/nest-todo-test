import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  label: string;
  @Column({ nullable: true })
  description: string;

  @Column()
  completed: boolean;
  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
