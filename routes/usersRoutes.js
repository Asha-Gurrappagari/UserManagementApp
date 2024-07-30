const express =require('express');
const jwt = require('jsonwebtoken')
const User =require('../model/user')
const verify_token=require('../middleware/verification')

const router = express.Router();

const {register,login,profile,wishlist,transaction} = require('../Controllers/userControllers')


router.post('/register/',register)
router.get('/login/',login)
router.get('/profile/',verify_token,profile)
router.get('/wishlist/',verify_token,wishlist)
router.get('/transaction/',verify_token,login)







module.exports = router;