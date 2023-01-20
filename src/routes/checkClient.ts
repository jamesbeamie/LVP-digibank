import express from "express";
import { Transactions, TransactionTypes } from "../entities/Transaction";

import { Client } from "../entities/Client";
import { Banker } from "../entities/Banker";
const router = express.Router();

router.delete(
  "/api/client/:clientId",
  async (req: any, res: any, params: any) => {
    const { clientId } = req.params;

    const client = await Client.findOne({ where: { id: parseInt(clientId) } });

    if (!client) {
      res.json({ msg: "client not found" });
    }
    //   router.delete("/api/client/clientId", async (req: any, res: any) => {
    //     console.log("sjfbhsb&&&", req.params);
    //     const { clientId } = req.params;
    //     const response = Client.delete(parseInt(clientId));

    //     return res.json({ response, msg: "deleted" });
    //   });
    //   return res.json({
    //     msg: "Client deleted",
    //   });

    const response = await Client.delete(parseInt(clientId));

    return res.json({ response, msg: "deleted" });
  }
);

export { router as clientRemoved };
