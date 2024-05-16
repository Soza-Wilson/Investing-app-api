import sequelize from "../util/database";
import { DataType, DataTypes } from "sequelize";


export interface transaction {

    transactionId: Number,
    transactionType: string,
    timestamp: Number
}

const transaction = sequelize.define("transaction", {

    transactionId: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    transactionType: { type: DataTypes.STRING },
    timestamp: { type: DataTypes.NUMBER }
})


export default transaction;