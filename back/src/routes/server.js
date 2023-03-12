const {router} = require("../routes/index")
const express = require("express");
const server = express();
const PORT = 3001;
const saveApiData = require("../controllers/getApiData.js")
const {sequelize} = require("../DB_connection")


server.use(express.json())
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use("/rickandmorty/", router)

sequelize.sync({force: true}).then(async () => {
    await saveApiData();
    server.listen(PORT, () => {
        console.log("Server in port " + PORT)
    })
})

module.exports = {server};
