const { application } = require('express');
const express = require('express');
const router = express.router();
 /* Register*/
router.get ("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})

/* ROUTES */

const usersRouters = require('./routes/users')
app.use('/users', usersRouters);

/*Login*/
router.get ("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})


module.exports = router;