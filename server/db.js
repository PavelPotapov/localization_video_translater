require("dotenv").config()

const Pool = require("pg").Pool

const databaseVal = JSON.parse(process.env.DATA_BASE_VAL)

const pool = new Pool(databaseVal)

module.exports = pool