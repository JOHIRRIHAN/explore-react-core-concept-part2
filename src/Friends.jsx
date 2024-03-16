import React, { useEffect, useState } from 'react'
import Friend2 from './Friend2';

const Friends = () => {
    const [friends , setFriends] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    
  return (
    <div>
        
        <h3>Friends: {friends.length}</h3>
        {
           friends.map(friend => <Friend2 friend={friend}></Friend2>) 
        }
    </div>
  )
};

export default Friends