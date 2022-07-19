import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ' '
}
// Register user 
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
	console.log(user, 'this is user')
})

// Login user 
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	console.log(user, 'this is user')
})

export const authSlide = createSlice({
	name: 'auth',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {

	}

})
export default authSlide.reducer