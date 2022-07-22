const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticked = require('../models/ticketModel')

// @desc Get user ticket
// @route /api/tickets
// @access Private 
const getTickets = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'getTickets' })
})
// @desc Create user ticket
// @route /api/tickets
// @access Private 
const createTicket = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'createTicket ' })
})

module.exports = {
	getTickets,
	createTicket
}