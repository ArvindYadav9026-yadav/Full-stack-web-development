import React from 'react'
import Dashboard, { AuthDashboard } from './components/Dashboard'
import { AuthProfile } from './components/Profile'

function App() {
  return (
    <div>
      <Routes>

        <Rout path="/" element={<p>Home</p>}/>
        <Rout path="/dashbord" element={<AuthDashboard/>}/>
        <Rout path="/profile" element={<AuthProfile Name={"Arvind"} Role={"soft" }/>}/>
      </Routes>
  
     
    </div>
  )
}

export default App
