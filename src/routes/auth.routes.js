import { Router } from "express";
import { login, register, logout } from "../controller/auth.controller.js";

const router = Router();

router.post('/register', register); // Configurado como POST
router.post('/login', login);       // Configurado como POST
router.post('/logout', logout);       // Configurado como POST

export default router;



