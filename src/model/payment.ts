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
    paymentId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    pamentType: { type: DataTypes.STRING },
    from: { type: DataTypes.INTEGER },
    to: { type: DataTypes.INTEGER },
    Transaction: { type: DataTypes.INTEGER },
    paymentStatus: { type: DataTypes.STRING },
    timeStamp: { type: DataTypes.INTEGER }

}
)

export default payment;