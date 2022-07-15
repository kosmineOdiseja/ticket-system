// @desc Register a new user
// @route /api/users
// @access Public
const registerUser = (req, res) => {
	// we can get undefine because we need to get bodyparser middleware.
	// This is 
	console.log(req.body)
	// this how we get those variables 
	const {name, email, password} = (req.body)

	// validation
	if(!name || !email || !password) {
		res.status(400).json({message: "Please include all fields"})
	}

	res.send('Register Route')
} 

// @desc Login a new user
// @route /api/users/login
// @access Public
const loginUser = (req, res) => {
	res.send('Login Route')
}

module.exports = {
	registerUser,
	loginUser,
} 