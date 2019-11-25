const express=require('express')
const app= express()
app.get('/api/timestamp/:date_string?',(req,res)=>{
    let paramdata=req.params.date_string
    let dat=new Date(paramdata)
    let k={}
    k.unix=dat.getTime()
    k.utc=dat.toUTCString()
    res.send(JSON.stringify(k))
    


})


app.listen(process.env.PORT,()=>{console.log('lauda lelo bhosdike')})