import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from "typeorm";
import { Client } from "./Client";
import { Person } from "./utils/Person";

@Entity("banker")
export class Banker extends Person {
  @Column({
    type: "varchar",
    unique: true,
    length: 10,
  })
  employee_number: string | undefined;

  @ManyToMany(() => Client)
  @JoinTable({
    name: "bankers_clients",
    joinColumn: {
      name: "banker",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "client",
      referencedColumnName: "id",
    },
  })
  clients: Client[];
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
