// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Transaction {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  type: string;

  @Column()
  amount: BigInteger;

  
}
