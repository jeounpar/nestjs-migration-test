import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  blob: string;

  @Column()
  age: number;
}
