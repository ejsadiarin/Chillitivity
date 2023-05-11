import { useState } from 'react'
import Homepage from './pages/Homepage'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-hidden flex '>
      {/* <Sidebar /> */}
      <Homepage />
    </div>
  )
}

export default App
