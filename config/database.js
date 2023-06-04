
const mongoose = require("mongoose");

exports.dbConnect = async () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Database Running Successfully`);
    }).catch((error) => {
        console.log(`Error While Connecting to Database `);
        console.log(error);
        process.exitCode = 1
    })
}
