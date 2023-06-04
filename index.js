
const express = require("express")
const dotenv = require("dotenv");
const FileRoutes = require("./routes/FileRoutes");
const database = require("./config/database");
const fileupload = require("express-fileupload");

const cloudinary = require("./config/cloudinary")

dotenv.config();

const app = express();

//For Parsing Request body data
app.use(express.json());

// For Parsing File Data
app.use(fileupload());

// Mounting Routes on a Router
app.use("/api/v1", FileRoutes);


const portnumber = process.env.PORT_NUMBER || 4003;

// Connection to MongoDb Database
database.dbConnect();

// Connection to Cloudinary media Service cloud
cloudinary.cloudinaryConnect();

//Starting Server
app.listen(portnumber, () => {
    console.log(`Server Started at ${portnumber}`);
})