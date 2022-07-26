import axios from "axios"

const API_URL = "/api/tickets/"

// create new ticket 

const createTicket = async (ticketData, token) => {
	// when we have token we need to to like this 
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	const response = await axios.post(API_URL, ticketData, config)

	if (response.data) {
		// we se json.stringify because localstorage can handle only string
		localStorage.setItem('ticket', JSON.stringify(response.data))
	}
	return response.data
}

const ticketServerice = {
	createTicket
}
export default ticketServerice