const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('./public'))
// Static files are the files the server does not have to change


// app.get('/', (req, res)=>{
// res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res)=>{
    res.status(404).send('Resource not found')
})


app.listen(5000, ()=>{
    console.log('The server is listening on port 5000')
})

