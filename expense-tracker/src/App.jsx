import { useState } from 'react'
import './App.css'

function App() {
  const totalBalance = 0
  return (
  <>
    <Header/>
    <TotalBalance number = {totalBalance}/>
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

function TotalBalance(props) {
  return (
    <div className = "total-balance-container">
      <h3 className = "balance-title">Total Balance</h3>
      <h2 className = "balance-number">${props.number}</h2>
    </div>
  )
}

export default App
