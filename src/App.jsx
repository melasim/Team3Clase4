import './App.css'
import React from 'react'
import Hello from './components/HelloComponent'

function App() {
  
  const nombre = "Team 3"
  return (
    <>
      <h1>Clase 4</h1>
      <Hello nombre={nombre}/>
    </>
  )
}

export default App
