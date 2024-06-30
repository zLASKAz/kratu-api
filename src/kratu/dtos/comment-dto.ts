
import { IsString } from 'class-validator';

export class CreateCommentDto {
    @IsString()
    readonly nameComment: string;

    @IsString()
    readonly image: string;

    @IsString()
    readonly timeStampComment: string;

    @IsString()
    readonly textComment: string;
}
