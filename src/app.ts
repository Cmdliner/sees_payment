import express from "express";
import { type Request, type Response } from "express";
import payment from "./routes/payment.routes";

const app = express();

// app.use(cors());
app.use("/payments", payment, );
app.get("/healthz", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Server is up and running" })
});

app.listen(4000, () => {
    console.log("Server is up and running on port 4000")
})