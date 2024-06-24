const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.send("Hi")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/myapi',(req,res)=>{
    res.send("<h1>My API</h1>")
})
