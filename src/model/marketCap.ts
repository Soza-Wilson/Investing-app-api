import { DataTypes } from 'sequelize'
import sequelize from '../util/database'


export interface marketCapInterface {

    marketCapId :Number,
    marketValue :Number
}


const marketCapModel = sequelize.define('businessMarketCap', {

    marketCapId: {

        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, 
    },
    marketValue: { type: DataTypes.INTEGER }
})

export default marketCapModel; 