
let express=require('express')
let mongoose=require("mongoose")
let jwt=require('jsonwebtoken')
let authentification=(req,res,next)=>{
    let token=req.headers.authorization?.split(" ")[1]
    console.log(token)
    if(token){
      jwt.verify(token, 'secret', function(err, decoded) {
       
        if(decoded){
            console.log(decoded,"decoded")
            let UserId=decoded.UserId
            req.body.UserId=UserId;
            next()
        }
        else{
            res.send('please login again')
        }
      });
    }
    else{
        res.send('please login again')
    }
}

module.exports={
    authentification
}