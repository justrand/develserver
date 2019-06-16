import { Router } from "express";
import ReceiptPrinterController from "../controllers/receipt-printer.controller";
//import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
//Login route
router.get("/receipt", ReceiptPrinterController.echoRequest);

export default router;