const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// const {logger} = require('./logger')

// app.use([logger, authorize])

app.use(morgan('tiny'))

app.get('/', (req, res)=>{

    res.send('HOME')
})

app.get('/about', (req, res)=>{
    res.send('ABOUT')
})
app.get('/api/product', (req, res)=>{
    // res.set('Cache-Control', 'no-store');
    res.status(200).send('Products')
})

app.get('/api/items', [logger, authorize], (req, res)=>{
    console.log(req.user);
    res.send('Items')
})



app.listen(5000, ()=>{
    console.log('Server is listening on Port 5000');
})