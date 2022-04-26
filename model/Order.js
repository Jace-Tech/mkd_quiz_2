import DB from "../migration.js"
import { DataTypes } from "sequelize"

// table (id, from_airport, from_country, to_airport, to_country, total, stripe_id, status(paid, failed))

const Orders = DB.define("orders", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    from_airport: DataTypes.STRING,
    from_country: DataTypes.STRING,
    to_airport: DataTypes.STRING,
    to_country: DataTypes.STRING,
    total: DataTypes.INTEGER,
    stripe_id: DataTypes.STRING,
    status: DataTypes.STRING,
})


export default Orders