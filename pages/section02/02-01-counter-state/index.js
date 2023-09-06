//효율적으로 react만들기

import { useState } from "react"

export default function section2(){

    // let count =0; let은 react전용 html에서 변경을 감지하지 못함(따라서, state를 써야함)
    const [count, setcount] = useState(0)

    function onclickCountUP(){
        // count= count+1;
       setcount(count+1);
    }
    function onclickCountDown(){
        // count= count-1;
        setcount(count-1);
    }

    return(
        <div>
            <div id="qqq">{count}</div>
            <button onClick={onclickCountUP}>카운트 올리기</button>
            <button onClick={onclickCountDown}>카운트 내리기</button>
        </div>
    )
}