const Router = require('express')
const router = new Router()
const userRouter = require('./usersRouter')

router.use('/users',userRouter)


module.exports = router;

