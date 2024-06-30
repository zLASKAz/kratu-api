// src/posts/post.entity.ts

import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommentEntity } from './comment.entity';
@Entity()
export class KratuEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    timeStamp: string;

    @Column()
    tagName: string

    @Column()
    title: string;

    @Column()
    content: string;

    @OneToMany(() => CommentEntity, comment => comment.kratu, { cascade: true })
    comments: CommentEntity[];
}
