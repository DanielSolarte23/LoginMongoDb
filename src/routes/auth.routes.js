import { Router } from "express";
import { login, register, logout, profile } from "../controller/auth.controller.js";
import { authRequire } from "../middlewares/validateToken.js";

const router = Router();

router.post('/register', register); // Configurado como POST
router.post('/login', login);       // Configurado como POST
router.post('/logout', logout);       // Configurado como POST

router.get("/profile", authRequire, profile) //Metodo Get

export default router;



