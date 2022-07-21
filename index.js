const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const sequelize = require('./db')
const models = require('./models/models')

const app = express()

const PORT = process.env.PORT || 5000

async function start(){
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => {
        console.log(`App started at port = ${PORT}`)
    })
}

start()