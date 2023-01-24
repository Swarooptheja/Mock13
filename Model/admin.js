

let mongoose=require('mongoose')


let Adminschema=mongoose.Schema({
    email:"masaischool@gmail.com",
    password:"masai"
})

let Admin=mongoose.model('Admindetails',Adminschema)

module.exports={
    Admin
}