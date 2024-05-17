import dotenv from 'dotenv'
dotenv.config();
import { Sequelize } from 'sequelize'

const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined;

const sequelize = new Sequelize(process.env.DB_NAME as string, process.env.DB_USERNAME as string, process.env.DB_PASSWORD as string, { dialect: "mysql", host: process.env.DB_HOST as string,port: port})


export default sequelize;