const express = require('express')
const router = express.Router()
const Users = require('../models/Users')

router.get('/AllUsers', (req, resp) => {
    const users = Users.find();
    users.then((all) => {
        resp.send({ result: all })
    }).catch((e) => {
        resp.send({ error: e })
    })
})

router.post('/addUser', (req, resp) => {
    const user = req.body
    const newUser = new Users(user)

    newUser.save()
        .then(() => {
            resp.send({ message: "User Added Successfully" })
        })
        .catch((e) => {
            resp.send({ message: e.message })
        })


    // fetch("/users/addUser" , {
    //     method: "POST",
    //         headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ name: 'Fahim', age: 15 })
    // })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
})


module.exports = router