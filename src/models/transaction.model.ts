import { model, Schema } from "mongoose";


import { Document } from "mongoose";

export interface ITransaction extends Document {
    full_name: string;
    matric_no: string;
    lvl: number;
    payment_reason: "dept_dues" | "others";
    status: "pending" | "failed" |"successful";
}

const TransactionSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    matric_no: {
        type: String,
        required: true,
        unique: true
    },
    lvl: {
        type: Number,
        required: true
    },
    payment_reason: {
        type: String,
        enum: ["dept_dues"],
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "failed", "successful"]
    }
}, { timestamps: true });

export const Transaction = model<ITransaction>("Transaction", TransactionSchema);

