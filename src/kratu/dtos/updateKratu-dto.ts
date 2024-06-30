import { IsString, IsOptional } from 'class-validator';

export class UpdateKratuDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    timeStamp?: string;

    @IsOptional()
    @IsString()
    tagName?: string;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    content?: string;
}
