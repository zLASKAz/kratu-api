import { IsString, IsArray, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';
import { CreateCommentDto } from './comment-dto'
export class CreateKratuDto {

    @IsString()
    name: string;

    @IsString()
    timeStamp: string;

    @IsString()
    tagName: string

    @IsString()
    title: string

    @IsString()
    content: string

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateCommentDto)
    comments: CreateCommentDto[];
}
