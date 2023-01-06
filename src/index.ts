import { createConnection } from "typeorm";
const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "jameswafula",
      password: undefined,
      database: "typeorm",
    });
    console.log("connected to pg db");
  } catch (err) {
    console.error(`unable to connect ${err}`);
  }
};
main();
