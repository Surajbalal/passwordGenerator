import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Passwordgen from './assets/component/passwordgen'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    <div className='bg-zinc-700 w-full h-screen flex justify-center '>
       <Passwordgen/>
       </div>
    </>
  )
}

export default App
