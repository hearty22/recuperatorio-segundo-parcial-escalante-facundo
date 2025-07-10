import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";



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
        paradign:{
            type:DataTypes.STRING,
            allowNull:false
        },
        release_year:{

            type: DataTypes.INTEGER,
            allowNull:false

        }

    },{
        createdAt:false,
        updatedAt:true
    }
)