//ts-ignore
import express from "express";
// import { Banker } from "src/entities/Banker";
import { Banker } from "../entities/Banker";

const router = express.Router();

router.post("/api/banker", async (req: any, res: any) => {
  const { firstName, lastName, email, cardNumber, employeeNumber } = req.body;
  const newBanker = Banker.create({
    first_name: firstName,
    last_name: lastName,
    email,
    card_number: cardNumber,
    employee_number: employeeNumber,
  });

  await newBanker.save();

  return res.json(newBanker);
});

export { router as createBankerRouter };
