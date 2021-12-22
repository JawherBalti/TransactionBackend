const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const compteRouter = require('./routes/Compte')
const transactionRouter = require('./routes/Transaction')

dotenv.config()
const PORT  = process.env.PORT || 5000
const DB_URI = process.env.DB_URI

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/compte", compteRouter)
app.use("/api/transaction", transactionRouter)

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  mongoose.connection.once('open', () => {
    console.log('Connection to database established')
  })
  
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})