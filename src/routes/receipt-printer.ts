import { Router } from "express";
import ReceiptPrinterController from "../controllers/receipt-printer.controller";
//import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
//Receipt route
router.get("/", ReceiptPrinterController.echoRequest);

export default router;