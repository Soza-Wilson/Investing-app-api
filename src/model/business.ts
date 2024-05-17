import { DataTypes } from 'sequelize'
import sequelize from '../util/database'

export interface businessInterface {

    businessId: Number,
    buisinessName: String,
    description: String,
    licence: string
}

const businessModel = sequelize.define('business', {

    businessId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    businessName: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    licence: { type: DataTypes.STRING }
})


export default businessModel;