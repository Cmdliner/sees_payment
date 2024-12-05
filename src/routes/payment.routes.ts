import { Router } from "express";
import { PaymentController } from "../controllers/payment.controller";

const payment = Router();

payment.post("/initiate", PaymentController.initiate as any);


export default payment;