const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

const { getTickets, getTicket, createTicket, deleteTicket } = require('../controllers/ticketController')

// we can do like this 
router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/:id').get(protect, getTicket)
router.route('/:id').get(protect, deleteTicket)

module.exports = router