import { DataTypes, Transaction } from 'sequelize'
import sequelize from '../util/database'


export interface payment {

    paymentId: Number
    pamentType: String,
    from: Number,
    to: Number,
    Transaction: Number,
    paymentStatus: String,
    timeStamp: String
}

const payment = sequelize.define(
    'payment', {
    paymentId: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    pamentType: { type: DataTypes.STRING },
    from: { type: DataTypes.NUMBER },
    to: { type: DataTypes.NUMBER },
    Transaction: { type: DataTypes.NUMBER },
    paymentStatus: { type: DataTypes.STRING },
    timeStamp: { type: DataTypes.NUMBER }

}
)

export default payment;