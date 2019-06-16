import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
//Login route
router.post("/auth", AuthController.login);

export default router;