const express = require('express');
const routers = express.Router();
const auth = require('./auth')
//User Controller 
 const restController = require('./Controller/restaurantController')
 routers.post('/rest', restController.allrest);
 routers.post('/search', restController.searchrest);
 routers.post('/fill', restController.fillrest);
 routers.post('/get', restController.getrest);

// routers.post('/signup', userController.signUpUser);
// routers.post('/login', userController.loginUser);
// routers.post('/logout', userController.userlogout)
// routers.get('/checkuser', auth, (req, res) => {
//     res.send(userController.checkuser(req, res))
// })
// routers.post('/getuserinfo', userController.getuserinfo)

module.exports = routers;