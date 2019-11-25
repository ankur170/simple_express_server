const express=require('express')
const app= express()
app.get('/mc',(req,res)=>{
    res.send('start hua bsdk')
})


app.listen(process.env.PORT,()=>{console.log('lauda lelo bhosdike')})