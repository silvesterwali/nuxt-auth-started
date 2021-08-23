/**
 *========================
 *
 * - @copyright 2021
 **/
const router = require('express').Router()
const AuthController = require('../controllers/AuthController')
const auth = require('../middlewares/Auth')
router.use(auth)
router.get('/me', AuthController.me)
router.post('/logout', AuthController.logout)

module.exports = router
