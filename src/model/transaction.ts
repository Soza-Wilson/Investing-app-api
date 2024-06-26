import sequelize from "../util/database";
import { DataType, DataTypes } from "sequelize";


export interface transactionInterface {

    transactionId: Number,
    transactionType: string,
    timestamp: Number
}

const transactionModel = sequelize.define("transaction", {

    transactionId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    transactionType: { type: DataTypes.STRING },
    
})


export default transactionModel;