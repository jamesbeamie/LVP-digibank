import express from "express";
import { Transactions, TransactionTypes } from "../entities/Transaction";

import { Client } from "../entities/Client";
import { Banker } from "../entities/Banker";
const router = express.Router();

router.put(
  "/api/banker/:bankerId/client/:clientId",
  async (req: any, res: any, params: any) => {
    const { bankerId, clientId } = req.params;

    const client = await Client.findOne({ where: { id: parseInt(clientId) } });
    const banker = await Banker.findOne({ where: { id: parseInt(bankerId) } });

    if (!banker && !client) {
      res.json({ msg: "banker or client not found" });
    }

    if (banker && client) {
      banker.clients = [client];
    }

    banker?.save();

    return res.json({
      msg: "Banker connected to client",
    });
  }
);

export { router as connectBankerToClient };
