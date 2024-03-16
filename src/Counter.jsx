import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0)
     const addCount = () => {
        const newCount = count + 1;
        setCount(newCount)
     }
     const reduceCount=() => {
        const newCount = count -1;
        setCount(newCount)
     }
  return (
    <div style={{border: '2px solid red'}}>
        <h3>Count:{count}</h3>
        <button onClick={addCount}>Add</button>
        <button onClick={reduceCount}>Reduce</button>
    </div>
  )
}

export default Counter