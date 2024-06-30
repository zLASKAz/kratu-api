import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KratuModule } from './kratu/kratu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KratuEntity } from './kratu/kratu.entity';
import { CommentEntity } from './kratu/comment.entity';
import { UpdateKratuDto } from './kratu/dtos/updateKratu-dto';
@Module({
  imports: [KratuModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "nestjsDB",
      entities: [KratuEntity, CommentEntity, UpdateKratuDto],
      synchronize: false
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
