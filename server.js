const express=require('express')
const app= express()
app.get('/api/timestamp/:date_string?',(req,res)=>{
    let paramdata=req.params.date_string
    let dat
    if(isNaN(paramdata)){
         dat= new Date(paramdata)
    }
    else{
         dat =new Date(parseInt(paramdata))
    }
        
    let k={}
    k.unix=dat.getTime()
    k.utc=dat.toUTCString()
    res.json((k))
    


})


app.listen(process.env.PORT,()=>{console.log('lauda lelo bhosdike')})