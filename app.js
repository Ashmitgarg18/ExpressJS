const http = require('http')
const {readFileSync} = require('fs');


const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req, res) =>{
    // console.log(req.method)
    const url = req.url
    console.log(url)
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'}) //MIME type - Multipurpose Internet Mail Extensions
        res.write(homePage)
        res.end()
    }
    else if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'}) //MIME type - Multipurpose Internet Mail Extensions
        res.write('<h1> ABOUT PAGEEEEE </h1>')
        res.end()
    }   
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'}) //MIME type - Multipurpose Internet Mail Extensions
        res.write(homeStyles)
        res.end()
    }
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'}) //MIME type - Multipurpose Internet Mail Extensions
        res.write(homeImage)
        res.end()
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'}) //MIME type - Multipurpose Internet Mail Extensions
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404, {'content-type':'text/html'}) //MIME type - Multipurpose Internet Mail Extensions
        res.write('<h1>PAGE NOT FOUND</h1>')
        res.end()
    }

})

server.listen(5000)