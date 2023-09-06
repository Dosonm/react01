export default function section2(){

    function onclickCountUP(){
       const result = Number(document.getElementById('qqq').innerText)+1
       document.getElementById('qqq').innerText = result;
    }
    function onclickCountDown(){
        const result = Number(document.getElementById('qqq').innerText)-1
        document.getElementById('qqq').innerText = result;
    }

    return(
        <div>
            <div id="qqq">0</div>
            <button onClick={onclickCountUP}>카운트 올리기</button>
            <button onClick={onclickCountDown}>카운트 내리기</button>
        </div>
    )
}