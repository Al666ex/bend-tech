const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')

router.get('/', UserController.getAllUsers)

module.exports = router

