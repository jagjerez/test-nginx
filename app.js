
require('dotenv').config();
const express = require('express')
const app = express()
const port = 5000

app.get('/', async (req, res) => {
  console.log(req.headers);
  /*if (process.env.REPLICA_NUMBER == 1){
    await new Promise((resolve, reject) => setTimeout(() => resolve(),50000))
  }*/
  
  res.send(`
  <H1>Replica número: ${process.env.REPLICA_NUMBER}<H1>
  ${Object.keys(req.headers).map(x=> `<h1>${x}:${req.headers[`${x}`]}</h1>`)}
  `)
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
