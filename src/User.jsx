import React, { useEffect, useState } from 'react'

const User = () => {
    const [user, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
  return (
    <div style={{border: '2px solid black', borderRadius: '15px'}}>
        <h3>users: {user.length}</h3>
    </div>
  )
}

export default User