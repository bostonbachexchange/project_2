const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.get('/signup', (req, res) => {
    res.render('users/signup')
})

router.post('/signup', async (req, res) => {
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )

User.create(req.body)
    .then(user => {
        res.redirect('/users/login')
    })
    .catch(error => {
        res.json(error)
    })
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    User.findOne({ username })
        .then(async (user) => {
            if (user) {
                const result = await bcrypt.compare(password, user.password)
            
                if (result) {
                    req.session.username= username
                    req.session.loggedIn = true
                    req.session.userId = user._id

                    console.log('this is the session after login', req.session)
                    res.redirect('/main')
                } else {
                    res.json({ error: 'username or password incorrect' })
                }
            } else {
                res.json({ error: 'user does not exist' })
            }
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

router.get('/login', (req, res) => {
    res.render('users/login')
})
router.post('/login', async (req, res) => {
    const { username, password } = req.body
    User.findOne({ username })
        .then(async (user) => {
            if (user) {
                const result = await bcrypt.compare(password, user.password)

                if (result) {
                    req.secure.username = username
                    req.session.loggedIn = true
                    req.session.userId = user._id
                    console.log('this is the session after login', req.session)
                    res.redirect('/main')
                } else {
                    res.json({ error: 'username or password incorrect'})
                }
            } else {
                res.json({ error: 'user does not exist' })
            }
        })
        // if they don't we'll redirect to the sign up page
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})
///logout
router.get('/logout', (req, res) => {
    req.session.destroy(ret => {
        console.log('this is returned from req.session.destroy', ret)
        res.redirect('/main')
    })
})

module.exports = router