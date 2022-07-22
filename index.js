const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routers/index')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)



const PORT = process.env.PORT || 5000

async function start(){
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => {
        console.log(`App started at port ${PORT}`)
    })
}

start()