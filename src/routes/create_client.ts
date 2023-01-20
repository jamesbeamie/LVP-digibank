import express from "express";
import { Client } from "../entities/Client";

const router = express.Router();

router.post("/api/client", async (req: any, res: any) => {
  const { firstName, lastName, email, cardNumber, balance } = req.body;
  const newClient = Client.create({
    first_name: firstName,
    last_name: lastName,
    email,
    card_number: cardNumber,
    balance,
  });

  await newClient.save();

  return res.json(newClient);
});

export { router as createClientRouter };
