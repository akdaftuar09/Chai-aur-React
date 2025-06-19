// A custom hook is a JavaScript function whose
// name starts with use and that can call other hooks.
// It allows you to extract and reuse component logic.

// import { useState } from "react";

// function useCounter(intialValue = 0, min = 0, max = 20){

//     const [count, setCount] = useState(intialValue);

//     const increment = () => {
//         if(count < max) setCount(count + 1)
//     }
//     const decrement = () => {
//         if(count > min) setCount(count - 1)
//     }
//     const reset = () => {
//         setCount(intialValue)
//     }
//     return {count, increment, decrement, reset}

// }
// export default useCounter

import { useState } from "react";

function useCounter(intialValue=0, min=0, max){
    const [count, setCount] = useState(intialValue)

    const increment = () => {
        if(count < max) setCount(count + 1)
    }
    const decrement = () => {
        if(count > min) setCount(count - 1)
    }
    const reset = () => {
        setCount(intialValue)
    } 
    return {count, increment, decrement, reset}
}
export default useCounter;
