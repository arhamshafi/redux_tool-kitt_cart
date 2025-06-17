import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement } from "./features/Counter_reducer"
function App() {
  let count = useSelector((state) => state.counter.value)
  let dispatch = useDispatch()
  return (
    <div className='flex justify-center flex-col items-center'>
      <h1 className='text-center text-black'>Couter_logic with redux_toolkkit</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={ ()=>dispatch(increment()) }>+</button>
        <button onClick={ ()=>dispatch(decrement()) }>-</button>
      </div>
    </div>
  )
}

export default App