/** Database for lunchly */

const pg = require("pg");
require('dotenv').config();

const db = new pg.Client(process.env.POSTGRES_URI);

db.connect();

module.exports = db;
