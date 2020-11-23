const express = require('express');
const routers = express.Router();
const auth = require('./auth')
//User Controller 
// const userController = require('./Controller/UserController')
// routers.post('/signup', userController.signUpUser);
// routers.post('/signin', userController.loginUser);
// routers.post('/signout', userController.userlogout)
// routers.get('/checkuser', auth, (req, res) => {
//     res.send(userController.checkuser(req, res))
// })
// routers.post('/getuserinfo', userController.getuserinfo)

module.exports = routers;