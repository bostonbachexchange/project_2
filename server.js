require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const profileRoutes = require('./controller/profile_routes')
const assignmentRoutes = require('./controller/assignment_routes')
const userRoutes = require('./controller/user_routes')

const app = require('liquid-express-views')(express())

app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
const session = require('express-session')
const MongoStore = require('connect-mongo')

app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI
        }),
        saveUninitialized: true,
        resave: false
    })
)

//app.use('/main', mainRoutes)
app.use('/users', userRoutes)
app.use('/assignments', assignmentRoutes)
app.use('/profile', profileRoutes)

app.get('/', (req, res) => {
    //res.redirect('/main')
    const loggedIn = req.session.loggedIn
    // res.redirect('/assignments', loggedIn)
    res.redirect('/assignments')
})

// const PORT = process.env.PORT  

// app.listen(PORT, () => {
//     console.log(`app is listening on port: ${PORT}`)
// })

app.listen(process.env.PORT || 3000)
