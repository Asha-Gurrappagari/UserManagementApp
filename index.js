const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRoutes')
const connectDB = require('./config/database')
dotenv.config()
const PORT = process.env.PORT
const app =express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())


connectDB()
app.use('/api/users',usersRoutes)
app.get('',(req,res)=>{
    res.send(`<h1>Welcome to Home page</h1>
        <button><a href='/api/users/register'> Register</a></button>
        <button><a href='/api/users/login'> Login</a></button>
        <button><a href='/api/users/profile'> Profile</a></button>
      `)
})
app.listen(PORT,()=>{console.log(`Running on localhost ${PORT}`)})