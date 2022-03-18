import React, { useEffect, useState,} from 'react'

function FunctionTag() {
    const [mytext, mytextUpdate] = useState(' mytext의 초기값이다.');

    useEffect(()=>{
        mytextUpdate('mytextUpdate 로 할당되는 값(2번쨰 파라미터)') 
    },[])

   
  return (
    <div>{mytext}</div>
  )
}

export default FunctionTag