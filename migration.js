import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.APP_DB_NAME, process.env.APP_USER, process.env.APP_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize