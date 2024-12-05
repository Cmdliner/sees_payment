import axios from "axios";
import { cfg } from "../app";
import { ITransaction } from "../models/transaction.model";
export class PaymentService {
    static async intiate(transaction: ITransaction, amount: number) {
        const { _id, full_name } = transaction;
        const INITIATE_PAYMENT_ENDPOINT = `${cfg.FLW_BASE_URI}/payments`

    }
}