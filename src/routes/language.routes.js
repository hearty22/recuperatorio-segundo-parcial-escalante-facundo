import { Router } from "express";


import { findAll, findById } from "../controllers/language.controllers.js";

const router = Router();
router.get("/languages", findAll);
router.get("/languages/:id", findById);



export default router;