const tc = require('truecallerjs')
const express = require('express')
const app = express()
const port = 8000//Your preferred port
const apiKey = '';//Your registration key from truecaller 

app.get('/', (req,res) => {
  res.send(`Server running at ${port}`)
})

app.get('/tc/:num', (req,res) =>{
  //res.send(req.params.num)
  var num = decodeURIComponent(req.params.num)
  if(num.includes(' ')){
    num.split(' ').join('')
  }
  if(num.includes('+91') || num.slice(0,3) == '+91'){
    num = num.split('+91')[1]
  }
  
  const data = tc.searchNumber({"number":number,'countryCode': 'IN','installationId':trueCallerId})
  
  let result = {
    'ok':false,
    'name': 'Not found',
    'mobile': 'Notfound',
    'carrier': 'Not found',
    'email': 'Not found'
  }
  
  if(data.data[0]){
    const res = data.data[0]
    if(res.name){
      result['name'] = res.name
    }
    if(res.phones[0]){
      result['mobile'] = res.phones[0]
      result['carrier'] = res.phones[0].carrier
    }
    if(res.internetAddresses[0]){
      result["carrier"] = res.phones[0].carrier
    }
    
    res.send(JSON.stringify(result))
  }
})

app.listen(port, (error) => {
  if(error){
    console.log(error)
  }else{
    console.log(`Server running at ${port}`)
  }
})
