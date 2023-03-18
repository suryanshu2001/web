const express=require('express');
const fs=require('fs');
const mongoose=require('mongoose');
const {userModel}=require('../models/user')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const { TIMEOUT } = require('dns');

const router=express.Router();


//signup api
router.post('/signup',async(req,res)=>{
    try {
        let hashedPassword;
        const{ userName,email,password,Passout_date,Current_organisation,picture,Branch,Name, Date_of_birth}=req.body;
       await bcrypt.genSalt (10, async(err, Salt)=> {
  
            // The bcrypt is used for encrypting password.
           await bcrypt.hash(password, Salt, async(err, hash)=> {
          
                if (err) {
                    return console.log('Cannot encrypt');
                }
          
                 hashedPassword = hash;
                console.log(hashedPassword);
        const userObj={
            userName,
            email,
            password:hashedPassword,
            Passout_date,
            Current_organisation,
            picture,
            Branch,
            Name,
            Date_of_birth
        }
        const user=new userModel(userObj);
        await user.save();
        res.status(200).json({
            message:'user saved succesfully'
        })
            })
        })
        
    } catch (error) {
       res.status(500).json({
        message:'something went wrong..',
        error:error.message
       })
    }
})


//login api
router.post('/login', async(req,res)=>{
    try {
        const{email,password}=req.body;

        if (email=='') {
            res.status(400).json({
                message:"Email is missing",
                error
            })
        }
        if (password=='') {
            res.status(400).json({
                message:"Password is missing",
                error
            })
        }
        const user=await userModel.findOne({ email: { $eq: email } });
            //password verification
            bcrypt.compare( password,user.password, 
            async (err, isMatch)=> {
  
            // Comparing the original password to
            // encrypted password   
            if (isMatch) {
                console.log('correct password');
            }
  
            if (!isMatch) {
              
                // If password doesn't match the following
                // message will be sent
                console.log('wrong password');
            }
        })
        
        //authentication of user
        const payload={
            user:{
                id:user.id
            }
        }
        const token=jwt.sign(payload,'userDataTokenSecretKey',{expiresIn:3600});
        
        if (user.email=="") {
            res.status(400).json({
                message:"user not found"
            })}

        const name=user.userName;
        res.status(201).json({
            message:`${name} you are logged in`,
        }).setHeader(x-auth-token, token)
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:"something went wrong....",
            error
        })
    }
    

})
module.exports=router;