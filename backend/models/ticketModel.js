const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
	{
		user: {
			// here is the one to many? 
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		},
		product: {
			type: String,
			required: [true, 'Please select a product'],
			enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'],
		},
		description: {
			type: String,
			required: [true, 'Please add a description of the issue']
		},
		status: {
			type: String,
			required: true,
			enum: ['new', 'open', 'closed'],
			default: 'new',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Ticket', ticketSchema)