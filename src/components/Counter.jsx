// 함수 선언식: 일반적으로 사용 (상태, 로직)
// function Counter() {
//   return (
//     <button>Counter</button>
//   )
// }

import { useState } from "react"

// export default Counter;
export default function Counter({onTotal}) {
    // let counter = 1;
    // const handleCounter = () => {
    //     counter++;
    //     console.log(counter);
    // }
    const [counter, setCounter] = useState(0);
    
    console.log('Counter>', counter);
    const handleCounter = () => {
        setCounter(counter + 1);
        if(onTotal) {
            onTotal();
        }
    }

    return (
        <button onClick={handleCounter}>Counter: {counter}</button>
    )
}

// 함수 표현식
// const Counter = () => {
//     return (
//         <button>Counter</button>
//     )
// }
// export default Counter;
// export const Counter = () => {
//     return (
//         <button>Counter</button>
//     )
// }
//UI를 담당하는 경우 함수 return 문이 없이 사용 가능
// export const Counter = () => (
//     <button>Counter</button>
// )