// require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.DB_URI);

async function connection() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    console.log("Database Connected Successfully..");

    return db;
  } catch (err) {
    console.error("Database Not Connected! : " + err);
  }
}

module.exports = connection;
