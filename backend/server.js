const express = require('express')
const cors=require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const api=require('./auth')

app.get('/users',async (req, res) => {
    try {
        const response = await api.get('/users')
        console.log(response.data)
    } catch (error) {
        console.error(error.message)
    }
})
app.listen(5000,()=>{console.log("Running on PORT 5000")})