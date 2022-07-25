const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

const { getTickets, getTicket, createTicket, deleteTicket, updateTicket } = require('../controllers/ticketController')

// we can do like this 
router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/:id').get(protect, getTicket)
router.route('/:id').delete(protect, deleteTicket)
router.route('/:id').put(protect, updateTicket)

module.exports = router