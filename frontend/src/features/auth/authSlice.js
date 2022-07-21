import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// get user from localStorage 
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
	user: user ? user : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ' '
}
// Register new user 
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
	try {
		// this line is going to the authService.js file and do his his job
		return await authService.register(user)
	} catch (error) {
		const message = (error.response && error.response.data && error.response.message) ||
			error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})

// Login user 
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	console.log(user, 'this is user')
})

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false
			state.isError = false
			state.isSuccess = false
			state.message = ''
		}
	},
	// because we are using createAsyncThunk we can use extension here like register/pending or register/register and etc 
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.user = action.payload
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.user = null
			})
	}

})
console.log(authSlice, 'this authslice')

export const { reset } = authSlice.actions;
export default authSlice.reducer