import React, { useState } from 'react'

const Team = () => {
    const teamStyle={
        border: '2px solid red',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    const [count, setCount] = useState(11)
    const addHandel = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const removeHandel = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
  return (
    <div style={teamStyle}>
        <h3>Players: {count}</h3>
        <button onClick={addHandel}>Add</button>
        <button onClick={removeHandel}>Remove</button>
    </div>
  )
}

export default Team