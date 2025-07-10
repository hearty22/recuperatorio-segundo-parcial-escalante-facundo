
import { configDotenv } from "dotenv";
import express from  "express"

configDotenv();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());7

app.get("/",(res,req)=>{
    console.log("esto todavia no tiene nada")
});

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en https://localhost:${PORT}`)
})