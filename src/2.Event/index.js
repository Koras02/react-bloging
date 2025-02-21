import React, { useState } from 'react'

function Event() {
    const [count,setCount] = useState(0);

    // 클릭 이벤트 처리
    const handleClick = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <h1>클릭 수: {count} </h1>
        <button onClick={handleClick}>증가</button>
    </div>
  )
}

export default Event;
