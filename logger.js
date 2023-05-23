const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    next()
}

// const loggerrrr =  (req, res, next)=>{
//     const method = req.method;
//     const time = new Date().getFullYear();
//     console.log(method, time)
//     next()
// }


module.exports = logger
// module.exports = {logger}