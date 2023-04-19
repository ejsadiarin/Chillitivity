import { useState } from 'react'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-900">
      <h1 className='text-white'>Test</h1>
      <Homepage />
    </div>
  )
}

export default App
