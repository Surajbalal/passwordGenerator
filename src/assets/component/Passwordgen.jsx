import React from 'react'
import {useState,useCallback,useEffect,useRef} from 'react'
function Passwordgen() {
  const [password,setPassword] = useState("")
  const [length,setLength] = useState(8)
  const [allowNum,setAllowNum] =useState(false)
  const [allowSChar,setAllowSChar] =useState(false)
  let passwordRef = useRef(null)

    const passwordGenerator = useCallback(()=> {
     
        let pass = ""
        let str = "QWERTYUIOPASDFGoiuytrewqzxcvbnmZXCVBNM"
        if(allowNum) str += "1234567890"
        if(allowSChar) str +="!@#$%^&*()_=-?/.>:'"
        for (let i = 0; i < length; i++) {
            const char = Math.floor(Math.random()*str.length+1)
            pass += str.charAt(char)
            // console.log(pass) 
            
        }
        setPassword(pass)
        console.log(pass)
        console.log(allowNum)
    },[length,allowNum,allowSChar,setPassword])
    const copyToClipBoard = useCallback(() =>{
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
    },[password])
useEffect(()=>{
    passwordGenerator()

},[length,allowNum,allowSChar,passwordGenerator])

  return (
       <div className="w-full  max-w-md mx-auto h-36 shadow-md rounded-lg px-4 py-3  bg-gray-800 text-orange-500 mt-20">
<h1 className=' text-white text-center my-3'>Password generator</h1>
<div className="flex shadow rounded-lg overflow-hidden mb-4">
<input
type="text"
value={password}
className="out line-none w-full py-1 px-3"
placeholder="Password"
ref={passwordRef}
/>
<button className='outline-none bg-blue-700 hover:bg-blue-500 text-white px-3 py-0.5 shrink-0' onClick={() =>{copyToClipBoard()}} 
> copy</button>
</div>
<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
<input
type="range"
min={6}
max={100}
// value={length} 
className='cursor-pointer'
onChange={(e) => {setLength(e.target.value)}}
/>
< label>Length: {length}</label>
<input type="checkbox" name="Num" onChange={() => {setAllowNum((prev)=> { return ! prev})}} />
<label htmlFor="char">Number</label>
<input type="checkbox" name="char" onChange={() => {setAllowSChar((prev)=> { return ! prev})}} />
<label htmlFor="char">Character</label>

</div>
</div>
</div>
  )
}

export default Passwordgen