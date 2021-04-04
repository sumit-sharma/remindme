// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { Transaction } from './transaction.entity';

@Entity()
export class Person {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  status: string;

  @Column(type => Transaction)
  transactions: Transaction;

}
