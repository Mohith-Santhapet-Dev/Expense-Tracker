import { useState } from 'react'
import './App.css'

function App() {
  const totalBalance = 0
  const income = 0
  const expense = 0
  return (
  <>
    <Header/>
    <TotalBalance number = {totalBalance}/>
    <div class = "money-details-container">
      <MoneyInfo title = "Income" number = {income} type = "income"/>
      <MoneyInfo title = "Expense" number = {expense} type = "expense"/>
    </div>
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

function MoneyInfo(props) {
  return (
    <div className = {`money-container ${props.type}`}>
      <h3 className = "money-info-title">{props.title}</h3>
      <h2 className = "money-info-number">${props.number}</h2>
    </div>

  )
}

export default App
