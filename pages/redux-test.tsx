
import { counterstore } from '../redux_state.js'
import { incremented, decremented } from '../redux_state.js'
import { replaceName } from '../redux_state.js'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

const Reduxtest = (props: any) => {

  const [nameInput, setnameInput] = useState("")
  
  const count = useSelector((state: any) => state.counter.value)
  const name = useSelector((state: any) => state.name.value)

  return (
    <>
      <h1>reduxtest</h1>
      <h2>simple counter</h2>
      <p>{count}</p>
      <button onClick={() => counterstore.dispatch(incremented())}>increment counter</button>
      <button onClick={() => counterstore.dispatch(decremented())}>decrement counter</button>
      <br/><br/>
      <h2>test with payload</h2>
      <p>{name}</p>
      <input type="text" onChange={(event) => setnameInput(event.target.value)}></input>
      <button onClick={() => counterstore.dispatch(replaceName(nameInput))}>GO!</button>
    </>
  )
}

export default Reduxtest