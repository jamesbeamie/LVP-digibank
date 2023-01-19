import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Person extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column({
    type: "varchar",
  })
  first_name: string | undefined;

  @Column({
    type: "varchar",
  })
  last_name: string | undefined;

  @Column({
    type: "varchar",
    nullable: true,
    unique: true,
  })
  email: string | undefined;

  @Column({
    type: "varchar",
    unique: true,
    length: 10,
  })
  card_number: string | undefined;
}
