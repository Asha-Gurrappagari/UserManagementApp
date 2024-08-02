const express =require('express');
const {register,login,profile,wishlist,transaction} = require('../Controllers/userControllers')
const { fetchRegister,fetchlogin} = require('../fetch/fetchUrl') 
const verify_token=require('../middleware/verification')

const router = express.Router();



router.get('/register/',fetchRegister)
router.post('/register/',register)

router.route('/login')
    .get(fetchlogin)
    .post(login);

router.get('/profile/',verify_token,profile)
router.get('/wishlist/',verify_token,wishlist)
router.get('/transaction/',verify_token,login)







module.exports = router;