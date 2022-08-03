import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})
export const { incremented, decremented } = counterSlice.actions

const nameSlice = createSlice({
  name: 'name',
  initialState: {
    value: "John Doe"
  },
  reducers: {
    replaceName: (state, action) => {
      state.value = action.payload
      return state
    }
  }
})
export const { replaceName } = nameSlice.actions


const isauthStorage = createSlice({
  name: 'isauth',
  initialState: {},
  reducers: {
    authenticate: (state, action) => {
      state = { isauth: true, ...action.payload } 
      return state
    }
  }
})
export const {authenticate} = isauthStorage.actions

export const counterstore = configureStore({
  reducer: { 
    counter: counterSlice.reducer,
    name: nameSlice.reducer,
    isauth: isauthStorage.reducer
  }
})

