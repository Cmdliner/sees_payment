import axios from "axios";
import { cfg } from "../app";
export class PaymentService {
    static async intiate(transaction: any, amount: number) {
        const { _id, full_name, email } = transaction;
        const INITIATE_PAYMENT_ENDPOINT = `${cfg.FLW_BASE_URI}/payments`
        try {
            const response = await axios.post(
                INITIATE_PAYMENT_ENDPOINT,
                {
                    tx_ref: `${_id}`,
                    amount,
                    currency: 'NGN',
                    redirect_url: 'https://',
                    customer: {
                        email: 'developers@flutterwavego.com',
                        name: full_name,
                        phonenumber: '09012345678'
                    },
                    payment_options: 'card',
                    customizations: {
                        title: 'SEES UI Payment',
                        logo: 'https://logo.com',
                        description: '',
                    }
                },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
        } catch (err) {
            console.error(err.code);
            console.error(err.response.data);
            throw err;
        }
    }
}