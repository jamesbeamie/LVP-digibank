import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
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
