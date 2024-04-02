const fast_connection = require("../connection/fastconnection");
const mongoose = require('mongoose')

class client_services {

    static async registereData(data) {
        try {
            const addclient = new fast_connection.models.companydetails(data);
            return await addclient.save();
        } catch (error) {
            throw error;
        }
    }
    static async listClients() {
        try {
            return await fast_connection.models.companydetails.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = client_services;