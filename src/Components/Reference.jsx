import React from 'react'
import { useRef } from 'react'

const Reference = () => {

    let data = useRef();
    let phone = useRef();

    function print(){
        console.log(data)
        console.log(data.current.value)
        console.log(phone)
        console.log(phone.current.value)
    }

  return (
    <div>
        <div className="reference">
            <label htmlfor="">Name</label>
            <input type="text" ref={data} placeholder="Enter " />
            <label htmlfor="">Phone</label>
            <input type="text" ref={phone} placeholder="Enter " />
            <button onClick={print}>Submit</button>
        </div>
    </div>
  )
}

export default Reference
