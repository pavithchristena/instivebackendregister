const client_services = require("../services/client_services")

const register = {
    controller: async (req, res) => {
        let new_obj = { ...req.body };
        const { key_contact_person } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!key_contact_person || !key_contact_person.email || !emailRegex.test(key_contact_person.email)) {
            return res.status(400).send("Invalid email address ");
        }
        console.log(new_obj)
        await client_services.registereData(new_obj);
        res.status(200).send("Registered successfully");
    }
}

const getdata = {
    controller: async (req, res) => {
        let clients = await client_services.listClients(req.query)
        res.status(200).send({ clients, message: 'Clients fetched successfully' });

    }
}
module.exports = {
    register,
    getdata
}