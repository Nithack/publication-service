import {
  Entity,
  Column,
  ObjectIdColumn,
  ObjectID,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Publication {
  @PrimaryGeneratedColumn('uuid')
  @ObjectIdColumn()
  uuid: ObjectID;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  owner: string;
}
