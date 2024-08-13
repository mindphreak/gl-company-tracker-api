var Express = require("express");
var cors = require("cors");
const { MongoClient } = require("mongodb");

var app = Express();
app.use(cors());

async function run() {
  const uri =
    "mongodb+srv://mindphreak:GlassLewis123@cluster0.f1rts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);

  await client.connect();

  const dbName = "glcompanydb";
  const collectionName = "companycollection";
  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const findQuery = {};

  try {
    const cursor = await collection.find(findQuery).sort({ name: 1 });
    for await (const company of cursor) {
      console.log(company.name);
    }
  } catch (err) {
    console.error(
      `Something went wrong trying to find the documents: ${err}\n`
    );
  }

  await client.close();
}

run().catch(console.dir);
