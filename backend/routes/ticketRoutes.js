const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

const { getTickets, getTicket, createTicket, deleteTicket, updateTicket } = require('../controllers/ticketController')

// we can do like this 
router.route('/').get(protect, getTickets).post(protect, createTicket)

// we can do in 3 lines like this or in one line
// router.route('/:id').get(protect, getTicket)
// router.route('/:id').delete(protect, deleteTicket)
// router.route('/:id').put(protect, updateTicket)

// also I can do in one line 
router.route('/:id').get(protect, getTicket).delete(protect, deleteTicket).put(protect, updateTicket)

module.exports = router