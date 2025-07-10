import { sequelize } from "../config/database.js"; //trae la configuracion de la abse de datos
import { DataTypes } from "sequelize"; //necesario para definir los tipos de datos de los atributos



export const languageModel =  sequelize.define("ProgrammingLanguage",
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        paradigm:{
            type:DataTypes.STRING,
            allowNull:false
        },
        release_year:{

            type: DataTypes.INTEGER,
            allowNull:true

        }

    },{
        createdAt:false,
        updatedAt:false
    }
);//se define el modelo de la base de datos