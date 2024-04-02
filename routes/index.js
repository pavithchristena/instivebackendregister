const express = require("express");
const register = require("./register")

const setup = (app) => {
    console.log("Setting up routes.");

    app.use("/api", register)


};

module.exports = {
    setup
};
