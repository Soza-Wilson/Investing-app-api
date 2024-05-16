import { Sequelize } from 'sequelize'

const sequelize = new Sequelize("investing_app_schema", "root", "soza123@Sa.", { dialect: "mysql", host: "localhost" })


export default sequelize;