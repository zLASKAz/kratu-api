import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KratuEntity } from './kratu.entity'
import { Repository } from 'typeorm';
import { CreateKratuDto } from './dtos/kratu-dto';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from './dtos/comment-dto';
import { UpdateKratuDto } from './dtos/updateKratu-dto';
@Injectable()
export class KratuService {
    constructor(@InjectRepository(KratuEntity) private repo: Repository<KratuEntity>,
        @InjectRepository(CommentEntity) private commentRepo: Repository<CommentEntity>
    ) { }

    async findAll() {
        try {
            const allData = await this.repo.find({ relations: ['comments'] });
            return allData
        } catch {
            throw new Error("all data not found")
        }
    }
    create(createKratuDto: CreateKratuDto) {
        const kratu = this.repo.create(createKratuDto)
        // create mean user entity instance ทำไมต้องมีการสร้างก่อนเพราะ อาจมีการทำอะไรสักอย่างกับ user.entity เช่น validate isString or something
        // จึงต้องมีการสร้าง create ก่อนที่จะ save
        return this.repo.save(kratu)
        //save mean take entity and save to sqlite database
    }
    async findOne(id: number) {
        const kratu = await this.repo.findOne({ where: { id }, relations: ['comments'] });
        console.log(kratu)
        if (!kratu) {
            throw new Error("Id not found");
        }
        return kratu;
    }
    async remove(id: number) {
        const kratu = await this.repo.findOne({ where: { id }, relations: ['comments'] });
        if (!kratu) {
            throw new Error("Id not found");
        }
        await this.commentRepo.remove(kratu.comments);

        console.log(kratu);
        return this.repo.remove(kratu);
    }

    async removeAll() {
        const kratus = await this.repo.find({ relations: ['comments'] });
        if (kratus.length === 0) {
            throw new Error("No data found");
        }
        for (const kratu of kratus) {
            await this.commentRepo.remove(kratu.comments);
        }

        console.log(kratus);
        return this.repo.remove(kratus);
    }
    async addComment(kratuId: number, createCommentDto: CreateCommentDto) {
        const kratu = await this.repo.findOne({ where: { id: kratuId }, relations: ['comments'] });
        if (!kratu) {
            throw new Error("Kratu with given ID not found");
        }
        const comment = this.commentRepo.create(createCommentDto);
        comment.kratu = kratu;
        return this.commentRepo.save(comment);
    }
    async update(id: number, updateKratuDto: UpdateKratuDto): Promise<KratuEntity> {
        const kratu = await this.repo.findOne({ where: { id: id } });
        if (!kratu) {
            throw new Error(`KratuEntity with ID ${id} not found`);
        }

        Object.assign(kratu, updateKratuDto);
        return this.repo.save(kratu);
    }
}
