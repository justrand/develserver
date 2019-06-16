import { Router, Request, Response } from "express";
import auth from "./auth";
import receiptPrinter from "./receipt-printer";
import user from "./user";

const routes = Router();
routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/receipt", receiptPrinter)
routes.get("/", (req: Request, res: Response) => {
    res.send('Welcome to devel. Please use the following api: /auth, /user, /receipt');
});
export default routes;