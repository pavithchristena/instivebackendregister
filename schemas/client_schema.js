const mongoose = require("mongoose");
const Schema = mongoose.Schema

const client_schema = new Schema({
    // company_name: { type: String },
    // head_office_address: { type: String },
    // country: { type: String },
    // postal_code: { type: String },
    // city: { type: String },
    // country_code: { type: String },
    // contact_number: { type: String },
    // website_url: { type: String },
    basicinfo: { type: Object },
    image: { type: String },
    key_contact_person: [{ type: Object }],
    products: { type: Object },




},
    {
        timestamps: true
    })

module.exports = client_schema;