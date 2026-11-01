import { useState } from 'react'
import './App.css'

function App() {
  return (
  <>
    <Header/>
  </>)
  
}

function Header() {
  return (
    <div className = "header-container">
      <img className = "header-img" src = "https://via.placeholder.com/150"></img>
      <h1 className = "header-title">Expense Tracker</h1>
    </div>
  )
}

export default App
