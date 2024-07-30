const User = require("../model/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

let register = async (req,res)=>{
    let{name,email,password}=req.body

    let salt = await bcrypt.genSalt(10)
    let hashedpassword = await bcrypt.hash(password,salt)

    let user = new User({name,email,password:hashedpassword})
    await user.save();
    
    let payload = {id:user.id}

    jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        },(err,token)=>{
            if(err) throw err
            res.send(token)
        }).catch(()=>console.log(`error in signin JWT`))   
}

let login = async (req,res)=>{
    let {email,password}=req.body;

    let user = await User.findOne({email})
    let match = await bcrypt.compare(password,user.password)

    if(!match){
        res.status(404).send(`user not found`)
    }else{
        let payload = {id:user.id}

    jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        },(err,token)=>{
            if(err) throw err
            res.send(token)
        })
    }
}


let profile = async (req,res)=>{
    // let user = await User.find({"email":req.body.email})
    res.status(200).send(req.user)

}

let wishlist = async (req,res)=>{

    res.status(200).send(`This is wishlist page`)
}

let transaction= async (req,res)=>{

    res.status(200).send(`This is transcation page`)
}

module.exports = {register,login,profile,wishlist,transaction}