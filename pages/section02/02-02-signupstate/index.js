import { enableExperimentalFragmentVariables } from "@apollo/client";
import { FUNCTIONS_CONFIG_MANIFEST } from "next/dist/shared/lib/constants";
import { useState } from "react"

export default function SignUpState(){

    const [email, setemail] = useState("");
    const [emailerror, setemailerror] = useState("")

    function onchangeemail(event){
        console.log(event) //나의 행동 (onchange)
        console.log(event.target) // 작동된 태그 (input)
        console.log(event.target.value) // 작동된 태그에 입력된 값
        
        setemail(event.target.value)
    }

    function check(){
     // 1. 검증
     if(email.includes("@") === false){
        // alert("형식이 올바르지 않습니다");
        setemailerror("형식이 올바르지 않습니다");
     }  else{
        // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수, 즉 api)

        // 3. 성공메세지
        setemailerror("");
        alert("회원가입이 완료되었습니다")
     }
    }
    
    

    return(
        <div>
            이메일:<input type="text" onChange={onchangeemail}></input> {/* onchange와 같이 on이 붙은 이벤트는 매게변수로 event값을 갖는다*/}
            비밀번호:<input></input>
            <button onClick={check}>회원가입</button>
            <div>{emailerror}</div>
        </div>
    )
}