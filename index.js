const express = require('express')
const dotenv = require('dotenv')
const usersRoutes = require('./routes/usersRoutes')
const connectDB = require('./config/database')
dotenv.config()
const PORT = process.env.PORT
const app =express();

connectDB()
app.use(express.json())
app.use('/api/users',usersRoutes)


app.listen(PORT,()=>{`Running on localhost ${PORT}`})