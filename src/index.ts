import { DataSource, createConnection } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transactions } from "./entities/Transaction";

const main = async () => {
  try {
    // DataSource replaces createConnection I was to await createConnection
    new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "jameswafula",
      password: undefined,
      database: "typeorm",
      entities: [Client, Banker, Transactions],
      synchronize: true,
    });
    console.log("connected to pg db");
  } catch (err) {
    console.error(`unable to connect ${err}`);
  }
};
main();
