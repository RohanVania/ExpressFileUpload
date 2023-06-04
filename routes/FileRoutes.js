const express = require("express");
const router = express.Router();

// Importing Handlers
const localFileUpload = require("../controller/fileUpload")
router.post("/localfileupload", localFileUpload)

module.exports = router;