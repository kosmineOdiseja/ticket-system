const express = require('express')
const router = express.Router()
const {loginUser, registerUser } = require('../controllers/userControler')

router.post('/', registerUser)
router.post('/login', loginUser)

module.exports = router