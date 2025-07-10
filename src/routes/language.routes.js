import { Router } from "express";


import { createLanguage, delLanguage, findAll, findById, updateLanguage } from "../controllers/language.controllers.js";

const router = Router();
router.get("/languages", findAll);
router.get("/languages/:id", findById);
router.post("/languages", createLanguage);
router.put("/languages/:id", updateLanguage);
router.put("/languages", updateLanguage);
router.delete("/language/:id", delLanguage);




export default router;