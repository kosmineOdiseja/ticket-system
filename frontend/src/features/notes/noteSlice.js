import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import noteService from './noteService'

const initialState = {
	notes: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

// get a ticket notes 
export const getNotes = createAsyncThunk('notes/getAll', async (ticketId, thunkAPI) => {
	console.log(ticketId, 'this is ticketId')
	try {
		const token = thunkAPI.getState().auth.user.token
		// this line is going to the authService.js file and do his his job
		return await noteService.getNotes(ticketId, token)
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) ||
			error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})

export const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		reset: (state) => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNotes.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getNotes.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.notes = action.payload
			})
			.addCase(getNotes.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})

	}
})

export const { reset } = noteSlice.actions
export default noteSlice.reducer