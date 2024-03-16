
export default function Friend2({friend}) {
    const {name, email} = friend;
  return (
    <div style={{border: '2px solid blue', borderRadius: '15px', marginBottom: '5px'}}>
        <h4>Name: {name}</h4>
        <h4>Email: {email}</h4>
    </div>
  )
}
