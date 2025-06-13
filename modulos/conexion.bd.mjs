import { MongoClient } from "mongodb"

const DB_URI ='mongodb://localhost:27017'
const client = new MongoClient(DB_URI)
const db = client.db('tienda')

export default db