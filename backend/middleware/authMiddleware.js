const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async ( req, res, next ) => {
	let token
	// console.log(request.headers.authorizatio, 'this is request')

	if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		try {
			// Get token from header
			token = req.headers.authorization.split(' ')[1]
			//  verify token 
			const decoded = jwt.verify(token, process.env.JWT_SECRET)
			// get user from token
			req.user = await User.findById(decoded.id).select('-password')
			// check in db for user
			if (!req.user) {
				res.status(401);
				throw new Error('Not authirised');
			}
			next()
		} catch (error) {
			console.log(error)
			res.status(401)
			throw new Error('Not authorized')
		}
	}

	if(!token) {
		res.status(401)
		throw new Error('Not authorized')
	}
})

module.exports = { protect }