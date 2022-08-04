import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import {auth} from './firebase-config'
import { signInWithEmailAndPassword } from "firebase/auth";

import { productSlice } from './redux_auth_thunk';

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

export const authenticateUser = createAsyncThunk('isauth/authenticate', async () => {
  console.log("thunk triggered")
  const response = await signInWithEmailAndPassword(auth, action.payload.logInEmail, action.payload.logInPassword)
  .catch(function(error) {
    console.log(error.code);
    console.log(error.message);
  });
  return response.user
})

const isauthStorage = createSlice({
  name: 'isauth',
  initialState: {},
  reducers: {
    authenticate: async (state, action) => {

      console.log("payload arrived in reducer", action)

      const result = await signInWithEmailAndPassword(auth, action.payload.logInEmail, action.payload.logInPassword)
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });

      console.log("response from firebase", result)

      if (result) {
        state = { 
          isauth: true, 
          name: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid 
        }
      } else {
        state = {isauth: false}
      }

      console.log("state after update", state)

      return state
    }
  }
})
export const {authenticate} = isauthStorage.actions

export const counterstore = configureStore({
  reducer: { 
    counter: counterSlice.reducer,
    name: nameSlice.reducer,
    authState: isauthStorage.reducer,
    products: productSlice.reducer
  }
})

