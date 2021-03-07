const path = require('path')


const userRoute = require(path.resolve('./src/routes/user'))
const productRoute = require(path.resolve('./src/routes/product'))

console.log(userRoute)
console.log(productRoute)