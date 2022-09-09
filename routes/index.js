const express = require('express')
const authentication = require('../middleware/jwtauth')
const router = express.Router()

// setting up controllers
const registerController = require('../controllers/registerController')
const loginController = require('../controllers/loginController')
const selfDataController = require('../controllers/selfDataController')
const allUsersDataController = require('../controllers/allUsersDataController')
const updateInfoController = require('../controllers/updateInfoController')
const changePasswordController = require('../controllers/changePasswordController')

// setting up routes
router.route('/register').post(registerController)
router.route('/login').post(loginController)
router.route('/selfdata/:id').get(authentication, selfDataController)
router.route('/allusersdata').get(authentication, allUsersDataController)
router.route('/updateInfo/:id').patch(authentication, updateInfoController)
router.route('/changepassword/:id').patch(authentication, changePasswordController)

// exporting the router
module.exports = router;