import { Router } from "express";


import { createLanguage, findAll, findById } from "../controllers/language.controllers.js";

const router = Router();
router.get("/languages", findAll);
router.get("/languages/:id", findById);
router.post("/languages", createLanguage);



export default router;