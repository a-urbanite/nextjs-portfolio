import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { userAPI } from './userAPI'

// First, create the thunk
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id: number, thunkAPI) => {
    // console.log("thunk activated")
    // console.log(id)
    const res = await fetch('https://dummyjson.com/products/1')
    const product = await res.json()
    // console.log("thunk data", product)
    return product
  }
)

interface UsersState {
  entities: []
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  entities: [],
  status: 'idle',
} as UsersState

// Then, handle actions in your reducers:
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    testing: (state) => {
      console.log("testing state", state)
      // console.log("testing action", action)
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchProductById.fulfilled, (state, action) => {
        console.log("extrareducer fulfilled")
        console.log("state in extrareducer", state)
        console.log("action in extrareducer", action)
        // Add user to the state array
        state.status = 'succeeded'
        console.log(state)
        // state.entities.push(action.payload)
      })
      .addCase(fetchProductById.pending, (state, action) => {
        console.log("extrareducer pendding")
        console.log("state in extrareducer", state)
        console.log("action in extrareducer", action)
        // state.status = 'loading'7
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        console.log("extrareducer rejected")
        console.log("state in extrareducer", state)
        console.log("action in extrareducer", action)
        // state.status = 'failed'
        // state.error = action.error.message
      })
  },
})

export const { testing } = productSlice.actions