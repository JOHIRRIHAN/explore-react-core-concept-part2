
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import User from './User';

function App() {

  function handleClick(){
    alert('button Clicked');
  }
  const click2 = () => {
    alert('click')
  }
  let handleClickYou = () => {
    alert('you clicked')
  }
  
  const fourClick = (num) => {
    alert(num + 5);
  }

  const click = (num) => {
    alert(num + 10);
  }
  return (
    <>
      <h3>React core Concept Part 2</h3>
      <Friends />
      <User />
      <Team></Team>
      <Counter />
      <button onClick={() => click(5)}>Click</button>
      <button onClick={click2}>Click 2</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClickYou}>Click you</button>
      <button onClick={() => {fourClick(5)}}>fourClick you</button>
    </>
  )
}

export default App
