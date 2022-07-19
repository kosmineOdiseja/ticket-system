import axios from "axios"

const API_URL = 'http://localhost:5000/api/users/'

// register user
const register = async (userData) => {
	console.log(userData, 'useData')
	console.log(API_URL, 'this is aapi url')
	const response = await axios.post(API_URL, userData)


	console.log(response.data, 'this is response')

	if (response.data) {
		console.log(JSON.stringify(response.data, 'this is response data '))
		localStorage.setItem('user', JSON.stringify(response.data))
	}

	console.log('return from register')

	return response.data
}

const authService = { register }
export default authService