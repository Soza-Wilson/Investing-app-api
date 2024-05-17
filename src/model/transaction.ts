import sequelize from "../util/database";
import { DataType, DataTypes } from "sequelize";


export interface transaction {

    transactionId: Number,
    transactionType: string,
    timestamp: Number
}

const transaction = sequelize.define("transaction", {

    transactionId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    transactionType: { type: DataTypes.STRING },
    
})


export default transaction;