import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AppDataSource } from './data-source';

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...AppDataSource.options,
        migrations: ['dist/migrations/*.js'],
        migrationsRun: true,
      }),
    }),
    UserModule,TodoModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
