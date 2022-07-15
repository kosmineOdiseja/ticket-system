const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 8000

const app = express()

// This is line for middleware parser
 app.use(express.json())
 app.use(express.urlencoded({extended: false}))

app.get('/', (req, res ) => {
	res.status(200).json({message: "welcomme"})
})
// routes 
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`server started on Port ${PORT}`))