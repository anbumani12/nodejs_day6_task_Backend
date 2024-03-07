const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const Port = process.env.PORT;
const DatabaseAPI = process.env.DATABASE_URL || 'mongodb+srv://santhoshsrinivasan29092001:sandy2001@cluster0.f12ypnu.mongodb.net'

mongoose.set('strictQuery', false)

async function Main(){
    await mongoose.connect(DatabaseAPI)
    console.log('connected to database')
    app.listen(Port , ()=> console.log('Connected to port'))
}

Main();
