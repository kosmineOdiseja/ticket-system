import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ' '
}
// Register new user 
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
	console.log(user, 'firs t 1')
	try {
		return await authService.register(user)
		console.log(user, 'this is user 2')
	} catch (error) {
		const message = (error.response && error.response.data && error.response.message) ||
			error.message || error.toString()
		console.log(error, 'this is error')
		console.log(message, "this is message")


		return thunkAPI.rejectWithValue(message)
	}
})
console.log(register, 'this is register')

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
	extraReducers: (builder) => {
		builder.addCase(register.pending, (state) => {
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