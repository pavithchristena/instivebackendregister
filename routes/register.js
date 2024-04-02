const express = require("express");
const router = express.Router();
const client_controller = require("../controller/client_controller")

router.post("/register", client_controller.register.controller)
router.get("/getdata", client_controller.getdata.controller)


module.exports = router