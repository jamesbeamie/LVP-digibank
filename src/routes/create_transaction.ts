import express from "express";
import { Transactions, TransactionTypes } from "../entities/Transaction";

import { Client } from "../entities/Client";
const router = express.Router();

router.post("/api/client/:clientId/transaction", async (req: any, res: any) => {
  const { clientId } = req.params;
  const { type, amount } = req.body;
  console.log("clientId", clientId);
  // return; ({where: {id: parseInt(clientId)}})
  const client = await Client.findOne({ where: { id: parseInt(clientId) } });
  if (!client) {
    return res.json({ msg: "client not found" });
  }

  const transaction = Transactions.create({
    type,
    amount,
    client,
  });
  await transaction.save();

  if (type === TransactionTypes.DEPOSIT) {
    client.balance = client.balance + amount;
  } else if (type === TransactionTypes.WITHDRAW) {
    client.balance = client.balance - amount;
  }

  await client.save();
  return res.json({ msg: "Success", transaction });
});

export { router as createTransactionRouter };
