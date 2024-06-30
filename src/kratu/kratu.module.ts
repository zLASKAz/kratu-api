import { Module } from '@nestjs/common';
import { KratuService } from './kratu.service';
import { KratuController } from './kratu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KratuEntity } from './kratu.entity';
import { CommentEntity } from './comment.entity';
import { UpdateKratuDto } from './dtos/updateKratu-dto';
@Module({
  imports: [
    TypeOrmModule.forFeature([KratuEntity, CommentEntity, UpdateKratuDto])
  ],
  providers: [KratuService],
  controllers: [KratuController]
})
export class KratuModule { }
