import { DataTypes } from 'sequelize'
import sequelize from '../util/database'


export interface marketCap {

    marketCapId :Number,
    marketValue :Number
}


const marketCap = sequelize.define('businessMarketCap', {

    marketCapId: {

        type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true
    },
    marketValue: { type: DataTypes.NUMBER }
})

export default marketCap; 