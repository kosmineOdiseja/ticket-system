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

// Get user Tickets
const getTickets = async (token) => {
	// when we have token we need to to like this 
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	const response = await axios.get(API_URL, config)
	return response.data
}


// Get user Tickets
const getTicket = async (ticketId, token) => {
	// when we have token we need to to like this 
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	const response = await axios.get(API_URL + ticketId, config)
	return response.data
}

// close user ticket 
const closeTicket = async (ticketId, token) => {
	// when we have token we need to to like this 
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	const response = await axios.put(API_URL + ticketId, { status: "closed" }, config)
	return response.data
}



const ticketService = {
	createTicket,
	getTickets,
	getTicket,
	closeTicket,

}

export default ticketService