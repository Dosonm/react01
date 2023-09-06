 import {MyEmail,MyemaiInput} from '../../../styles/01-02-emotion'
 
 export default function EmotionPage(){

    //여기는 자바스크립트 쓰는 곳

    return(
        //여기는 html 쓰는곳
        <div>
            <MyEmail>이메일: </MyEmail>
            <MyemaiInput type='text'></MyemaiInput>
            <button>클릭하세요</button>
            <img src="/next.svg"></img>
        </div>
    )
 }