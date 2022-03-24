const express=require("express");
const app=express()

//random user name and password for test 
//orignal user and password would be fetch from database 
//and password should be encrypted
const user="admin"
const password="123456789" 

//parsing body data
app.use(express.json())

//simple authentication checking if user id pass is correct
//orignal app uses token method for authentication
const authentication=(req,res,next)=>{
    if(!req.body.user || !req.body.password){
        return res.status(400).json({
            status:"fail",
            message:"you must be logged in to perform the actions"
        })
    }
    if(req.body.user!==user || req.body.password!==password){
        return res.status(400).json({
            status:"fail",
            message:"wrong id or password"
        })
    }
    next()
}

//removing user name and password from body now
const filter=(req)=> {
    const queryObj =req.body;
    const includedFields = ['user', 'password'];
    includedFields.forEach(el => delete queryObj[el]);
    return queryObj;
}
//sending data to user and also add it to db if there is one
const addCustomer=(req,res,next)=>{
    
    const newCustomer=filter(req)
    res.status(200).json({
        status:"success",
        data:{
            newCustomer
        }
    })
}

app.post("/addcustomer",authentication,addCustomer)

//listening app onport 3000
const port=process.env.NODE_ENV || 3000
app.listen(port,()=>{
    console.log("server is running")
})