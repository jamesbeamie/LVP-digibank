import { DataSource, createConnection } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transactions } from "./entities/Transaction";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";

const app = express();

const main = async () => {
  try {
    // DataSource replaces createConnection I was to await createConnection
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "jameswafula",
      password: undefined,
      url: "typeorm",
      entities: [Client, Banker, Transactions],
      synchronize: true,
    });
    // createConnection();
    console.log("connected to pg db");
    app.use(express.json());
    app.use(createClientRouter);
    app.use(createBankerRouter);
    app.listen(8080, () => {
      console.log("running on port 8080");
    });
  } catch (err) {
    console.error(`unable to connect ${err}`);
  }
};
main();
