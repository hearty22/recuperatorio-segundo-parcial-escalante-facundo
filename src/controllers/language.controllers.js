import { languageModel } from "../models/language.model.js";
import { Op } from "sequelize";
//GET ALL
export const findAll = async (req, res)=>{
    try {
        const languanges = await languageModel.findAll();
        res.status(200).json(languanges);
    } catch (error) {
        res.status(500).json({error: "error interno al obtener los lenguajes"})
    }
}
//GET BY ID

export const findById = async (req, res)=>{
    try {
        const language = await languageModel.findByPk(req.params.id);
        if(!language){
            return res.status(404).json({message: "lenguaje no encontrado"})
        };
        res.status(200).json(language);
        
    } catch (error) {
        res.status(500).json({error:"error interno al obtener el lenguaje solicitado"});
    }
};