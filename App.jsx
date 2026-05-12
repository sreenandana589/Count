import { useState } from 'react'

import './App.css'


function App() {
  
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className='San'>
      <h1>Counter: {count}</h1>
      <section class="old">
        
      <button onClick={increment}>Increment</button>
      </section>
      <section class="new">
      <button onClick={decrement}>Decrement</button>
      </section>
      <section class="med">
      <button onClick={reset}>Reset</button>
      </section>
    </div>
 
);
}
export default App;