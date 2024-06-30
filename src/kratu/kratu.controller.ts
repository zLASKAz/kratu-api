import { Controller, Get, Body, Param, Post, Delete, Patch } from '@nestjs/common';
import { KratuService } from './kratu.service';
import { CreateKratuDto } from './dtos/kratu-dto';
import { CreateCommentDto } from './dtos/comment-dto';
import { UpdateKratuDto } from './dtos/updateKratu-dto';

@Controller('kratu')
export class KratuController {
    constructor(private kratu: KratuService) { }

    @Get('/')
    async findAll() {
        return this.kratu.findAll()
    }
    @Get('/:id')
    async findOne(@Param('id') id: number) {
        return this.kratu.findOne(id);
    }
    @Post('/post')
    create(@Body() body: CreateKratuDto) {
        return this.kratu.create(body)
    }
    @Delete('/delete/:id')
    remove(@Param('id') id: number) {
        return this.kratu.remove(id)
    }
    @Delete('/delete-all')
    removeAll() {
        return this.kratu.removeAll()
    }
    @Post('/:id/comments')
    async addComment(@Param('id') kratuId: number, @Body() createCommentDto: CreateCommentDto) {
        return this.kratu.addComment(kratuId, createCommentDto);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: number, @Body() updateKratuDto: UpdateKratuDto) {
        return this.kratu.update(id, updateKratuDto);
    }
}
