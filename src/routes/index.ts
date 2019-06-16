import { Router, Request, Response } from "express";
import auth from "./auth";
import receiptPrinter from "./receipt-printer";
import user from "./user";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/receipt", receiptPrinter)

export default routes;