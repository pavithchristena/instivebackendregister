const modelSchema = require("../schemas");
const mongoose = require("mongoose");


module.exports = (db_name) => {
    const conn = mongoose.createConnection(
        `mongodb://localhost:27017/${db_name}?retryWrites=true`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            maxPoolSize: 5,
        }
    );
    return modelSchema(conn);
};


