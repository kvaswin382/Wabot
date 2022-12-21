const tc = require('truecallerjs')
const express = require('express')
const app = express()
const port = 8000//Your preferred port
const apiKey = '';//Your registration key from truecaller 

app.get('/tc/:num', (req,res) =>{
  res.send(req.params.num)
})

app.listen(port, (error) => {
  if(error){
    console.log(error)
  }else{
    console.log(`Server running at ${port}`)
  }
})
