import { DataTypes } from 'sequelize'
import sequelize from '../util/database'

export interface userInterface {

    userId: Number,
    givenName: String,
    parentName: String,
    email: string,
    picture: string
}


const userModel = sequelize.define('user', {
    userId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull:false },
    givenName: { type: DataTypes.STRING,allowNull:false },
    parentName: { type: DataTypes.STRING,allowNull:false },
    email: { type: DataTypes.STRING,allowNull:false },
    picture: { type: DataTypes.STRING,allowNull:true }

})


export default userModel