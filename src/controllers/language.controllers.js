import { languageModel } from "../models/language.model.js";
import { Op } from "sequelize";

export const findAll = async (req, res)=>{
    try {
        const languanges = await languageModel.findAll();
        res.status(200).json(languanges);
    } catch (error) {
        res.status(500).json({error: "error interno al obtener los lenguajes"})
    }
}