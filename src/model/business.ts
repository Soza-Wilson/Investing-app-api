import { DataTypes } from 'sequelize'
import sequelize from '../util/database'

export interface business {

    businessId: Number,
    buisinessName: String,
    description: String,
    licence: string
}

const business = sequelize.define('business', {

    businessId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    businessName: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    licence: { type: DataTypes.STRING }
})


export default business;