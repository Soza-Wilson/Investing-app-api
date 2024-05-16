import { DataTypes } from 'sequelize'
import sequelize from '../util/database'

export interface user {

    userId: Number,
    givenName: String,
    parentName: String,
    email: string,
    picture: string
}


const userModel = sequelize.define("user", {
    userId: { type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true },
    givenName: { type: DataTypes.STRING },
    parentName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    picture: { type: DataTypes.STRING }

})


export default userModel