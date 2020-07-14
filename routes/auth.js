const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/db');
const router = express.Router();

router.post('/register',(req,res)=>{
    const {name,email,password,phone,profession} = req.body ;
    if(!email || !password || !name || !phone|| !profession){
       return res.status(422).json({error:"Please fill all the fields"})
    }
    const userData = {
        email,
        password,
        name,
        phone,
        profession
    }
    User.findOne({name:name})
    .then(user=>{
        if(!user){
            bcrypt.hash(password, 10, (err,hash)=>{
                userData.password = hash
                User.create(userData)
                    .then(user=>{
                        res.json({message:'Signup Succesfully'})
                    })
                    .catch(err=>{
                        res.send('error: ' + err)
                    })
            })
        }
        else{
            res.json({error: 'User Already Exists'})
        }
    })
    .catch(err=>{
        res.send('error: ' + err)
    })
})

router.post('/signin',(req,res)=>{
    const {name,password} = req.body
    if(!name || !password){
       return res.status(422).json({error:"Please Fill Name Or Password"})
    }
    User.findOne({name:name})
    .then(user=>{
        if (!user){
            return res.json({error:"invalid credentials "})
        }
        bcrypt.compare(password,user.password)
        .then(doMatch=>{
            if(doMatch){
                const token=jwt.sign({_id:user._id},JWT_SECRET)
                const {_id,name,phone,email,profession} = user
                res.json({token,user:{_id,name,phone,email,profession},message:"Login Succesfully"})
            }
            else{
                return res.json({error:"invalid credentials "})
            }
        })
        .catch(err=>{
            console.log(err)
        })

    })
})

module.exports = router;