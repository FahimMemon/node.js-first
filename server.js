const express = require('express')
const app = express()
const db = require('./Config/db')

db.connection.once('open', () => {
    console.log("db connected")
})
    .on("error", error => {
        console.log(error, 'Error Message')
    })

app.listen(process.env.port || 3008, () => {
    console.log('Server is listening')
})

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/index'))


