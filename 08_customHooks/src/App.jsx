// import useCounter from "./hooks/useCounter"
// function App() {
//   const {count, increment, decrement, reset} = useCounter(0, 0, 20);

//   return (
//     <>
//       <h1>Custom Hook Counter</h1>
//       <h2>Counter Value : {count}</h2>
//       <button onClick={increment}>Add Value</button>
//       <button onClick={decrement}>Remove Value</button>
//       <br />
//       <button onClick={reset}>Reset Value</button>
//     </>
//   )
// }

// export default App
import React from 'react'
import useCounter from './hooks/useCounter'
import LogMessage from './components/LogMessage'
import WebRoute from './components/WebRoute'
import GuessGame from './components/GuessGame'
function App() {
  const {count , increment, decrement, reset} = useCounter(0, 0, 20)
  return (
    <>
      <h1>Custom Hook Counter</h1>
      <h2>Value of Count : {count}</h2>
      <button onClick={increment}>Add a Value</button>
      <button onClick={decrement}>Remove a Value</button>
      <br />
      <button onClick={reset}>Reset the Value</button>
      <br />
      {<GuessGame />}
      <br />
      {<LogMessage/>}
      <br />
      {<WebRoute/>}
      
    </>
  )
}

export default App
