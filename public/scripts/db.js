const low = require("lowdb"),
    FileSync = require("lowdb/adapters/FileSync");


const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ jobs: [], body: []})
    .write()


module.exports = db;