import { sequelize } from "./database.js";




export const db =  sequelize.sync({force: false, alter: true})
.then(()=>{
    console.log("conexion completa con la base de datos");
})
.catch((error)=>{
    console.log("conexion con la base de datos fallida");
    console.error("error especifico: ", error);
})