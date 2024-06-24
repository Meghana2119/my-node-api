const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
   res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  app.get('/myapi',(req,res)=>{
     res.send("<h1>My API</h1>")
  })
app.use(express.json())
app.post('/create_user',(req,res)=>{
    const userData=req.body
    res.status(201).json({message:'USer created successfully',userData})
})
