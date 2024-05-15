const express = require('express')
const cors = require('cors');
require('dotenv').config()
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const router = require('./routes');


const app = express()

// middleware 
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)

const PORT = process.env.PORT || 5000




connectDB().then(() => {

    app.get('/', async (req, res) => {
        res.send('welcome to the helps')
    })

    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`)
    })
})

