import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { KratuEntity } from './kratu.entity';

@Entity()
export class CommentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameComment: string;

    @Column()
    image: string;

    @Column()
    timeStampComment: string;

    @Column()
    textComment: string;

    @ManyToOne(() => KratuEntity, kratu => kratu.comments, { onDelete: 'CASCADE' })
    kratu: KratuEntity;
}
