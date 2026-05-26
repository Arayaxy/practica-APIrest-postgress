const express = require('express')
require('dotenv').config()
// const pool = require('./config/configpull')


const port = process.env.PORT || 3000


const app = express()


// parse application/x-www-form-urlencoded
app.use(express.urlencoded())

// parse application/json
app.use(express.json())

app.use('/api/v1/servicios', require('./routes/servcios.router'))
// app.use('/api/v1/productos', require('./routes/servcios.router'))



app.listen(port, () => {
    console.log(`Server on port ${port}`)
})
