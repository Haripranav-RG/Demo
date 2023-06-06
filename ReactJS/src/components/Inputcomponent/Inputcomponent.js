import React from 'react'
import { useState } from 'react'
import './Inputcomponent.css'
function Inputcomponent() {
  const [name, setName] = useState('')
  const handlechange = (e) => {
    setName(e.target.value)
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(name)
  }
  
  return (
    <div>
      <label className='s1'>name</label>
      <input onChange={handlechange} type="text" /> 
      <button onClick={handlesubmit}>submit</button>
         </div>
  )

}

export default Inputcomponent
