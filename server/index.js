require("dotenv").config();
const express = require("express");
const massive = require("massive");
const authController = require("./authController");

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set("db", db);
    console.log("DB Connected")
})

app.use(express.json())

app.get('/api/user/', authController.getUser)
app.post('/api/register/', authController.register)
app.post('/api/login', authController.login)
app.delete('/api/logout/', authController.logout)

app.listen(SERVER_PORT, () => {
    console.log(`Testing, testing on ${SERVER_PORT}`)
})