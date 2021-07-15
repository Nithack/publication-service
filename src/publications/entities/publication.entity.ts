import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Publication {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  owner: string;
}
