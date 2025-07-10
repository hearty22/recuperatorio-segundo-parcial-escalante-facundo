import { Router } from "express";


import { findAll } from "../controllers/language.controllers.js";

const router = Router();
router.get("/languages", findAll);



export default router;