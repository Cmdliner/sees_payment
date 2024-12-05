import express from "express";
import { type Request, type Response } from "express";
import payment from "./routes/payment.routes";
import helmet from "helmet";
import cors from "cors";
import { AppConfig } from "./controllers/configs/app.config";

export const cfg = new AppConfig({
    FLW_BASE_URI: process.env.FLW_BASE_URI,
    CORS_ORIGIN: process.env.CORS_ORIGIN
});

const app = express();

app.use(cors({
    origin: cfg.CORS_ORIGIN,
}));

app.use(helmet());
app.use("/payments", payment, );
app.get("/healthz", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Server is up and running" })
});


app.listen(4000, () => {
    console.log("Server is up and running on port 4000")
})