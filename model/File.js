
const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: String,
    },

})

const fileModel = mongoose.model("File", fileSchema);
module.exports = fileModel;