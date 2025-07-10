//importaciones 
import { configDotenv } from "dotenv";
import express from  "express"
import { languageModel } from "./src/models/language.model.js";
import { db } from "./src/config/db.js";
import router from "./src/routes/language.routes.js";

configDotenv();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.get("/",(res,req)=>{
    res.send(languageModel, db)
});

app.use("/api",router)
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en https://localhost:${PORT}`)
})