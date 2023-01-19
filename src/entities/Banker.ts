import { Entity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Person } from "./utils/Person";

@Entity("banker")
export class Banker extends Person {
  @Column({
    type: "varchar",
    unique: true,
    length: 10,
  })
  employee_number: string | undefined;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
