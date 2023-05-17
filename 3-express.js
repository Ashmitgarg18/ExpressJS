const express = require('express');
const app = express()

app.get('/', (req, res)=>{
  console.log('User hit the resource')  
  res.send('Home PAGEEEEE')
})

app.get('/about', (req, res)=>{
    res.send('About Me')
})

app.all('*', (req, res)=>{
    res.status(404).send('<h1> RESOURCE NOT FOUND </h1>')
})

app.listen(5000, ()=>{
    console.log('The server is listening on port 5000')
})

