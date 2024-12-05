import { model, Schema } from "mongoose";

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

export const Transaction = model("Transaction", TransactionSchema);

