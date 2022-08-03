import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

const nameSlice = createSlice({
  name: 'name',
  initialState: {
    value: "John Doe"
  },
  reducers: {
    replaceName: (state, action) => {
      // console.log("replaceName triggered")
      // console.log("state before update", state)
      // console.log("action", action)
      state.value = action.payload
      // console.log("state after update", state)
      return state
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

export const { replaceName } = nameSlice.actions

export const counterstore = configureStore({
  reducer: { 
    counter: counterSlice.reducer,
    name: nameSlice.reducer  
  }
})

