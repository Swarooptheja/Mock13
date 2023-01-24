

let mongoose=require("mongoose")

let Signup=mongoose.Schema({
    email:String,
    password:String,
    Fullname:String

})

let Signupmodel=mongoose.model('Signupmock13',Signup)

module.exports={
    Signupmodel
}