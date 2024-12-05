import { Request, Response } from "express";
import { PaymentService } from "../services/payment.service";
import { Transaction } from "../models/transaction.model";

export class PaymentController {
    static async initiate(req: Request, res: Response) {
        const { full_name, matric_no, lvl, payment_reason } = req.body;

        //! TODO => SANITIZE AND VALIDATE DATA
        let validPaymentReasons = ["dept_dues"];
        if (!payment_reason || !(payment_reason in validPaymentReasons)) {
            let message = !payment_reason ? "payment_reason required!!" : "Invalid payment reason";
            return res.status(422).json({ error: true, message });
        }

        const paymentTransaction = new Transaction({ full_name, matric_no, lvl, payment_reason });
        await paymentTransaction.save();
        const _ = await PaymentService.intiate(paymentTransaction, 12345);


        if (!paymentTransaction) {
            return res.status(400).json({ error: true, message: "An error occured!" });
        }



        return res.status(200).json({ success: true, message: "Payment successful", payment_link: `mlkdmtk` });
    }

    static async verify(req: Request, res: Response) {

    }
    static async checkPaymentStatus(req: Request, res: Response) {
        const { transaction_ref } = req.body;
    }


}