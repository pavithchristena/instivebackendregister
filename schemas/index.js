const client_schema = require("./client_schema")

module.exports = (db) => {
    db.model("companydetails", client_schema);
    return db;
}