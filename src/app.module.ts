import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'lautiavila96',
      database: 'testNestjs',  
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, //WARNING!!!!!!!!!
      //Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
      retryDelay: 3000,
      retryAttempts: 10
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
