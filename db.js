// require("dotenv").config();

const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DB_URI);

let db;

async function DBConnect() {
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("Database Connected Successfully...");

    // return db;
  } catch (err) {
    console.error("Database Not Connected! : " + err);
  }
}

async function GetData() {
  return db.collection("Faculty").find().toArray();
}

module.exports = { DBConnect, GetData };
