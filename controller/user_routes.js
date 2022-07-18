const express = require('express')
const bcrypt = require('bcryptjs')
const Profile = require('../models/profile')
const User = require('../models/user')
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
                    ////// checks to see if profile exist /////////
                    const profile = await Profile.find({"username": username});
                    if (profile.length !== 0) {
                        //console.log(profile)
                        console.log("username", username)
                        
                        console.log('profile exist', profile)
                        res.redirect('/assignments')
                        //res.redirect('assignments/home')
                    } 
                     else { console.log('no profile exist', profile)
                     console.log('profile length', profile.length)
                     res.redirect('/profile/new')
                    }
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

// router.post('/login', async (req, res) => {
//     const { username, password } = req.body
//     User.findOne({ username })
//         .then(async (user) => {
//             if (user) {
//                 const result = await bcrypt.compare(password, user.password)

//                 if (result) {
//                     req.secure.username = username
//                     req.session.loggedIn = true
//                     req.session.userId = user._id
//                     console.log('this is the session after login', req.session)
//                     // res.redirect('/assignments.index')
//                     res.render('/assignment/home')
//                 } else {
//                     res.json({ error: 'username or password incorrect'})
//                 }
//             } else {
//                 res.json({ error: 'user does not exist' })
//             }
//         })
//         // if they don't we'll redirect to the sign up page
//         .catch(error => {
//             console.log(error)
//             res.json(error)
//         })
// })
///logout
router.get('/logout', (req, res) => {
    ////// check if loggin in false, go to login page////
    req.session.destroy(ret => {
        console.log('this is returned from req.session.destroy', ret)
        res.redirect('/users/login')
    })
})

module.exports = router