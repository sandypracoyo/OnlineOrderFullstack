const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config({path:'.env'})

const indexRouter = require('./routes/index')
const CustomersRouter = require('./routes/Customers')
const ProductsRouter = require('./routes/Products')
const DriversRouter = require('./routes/Drivers')
const OrderRouter = require('./routes/Orders')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use('/', indexRouter)
app.use('/customer', CustomersRouter)
app.use('/product', ProductsRouter)
app.use('/driver', DriversRouter)
app.use('/order', OrderRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server running on port ${PORT}`))