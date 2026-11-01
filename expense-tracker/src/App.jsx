import { useState } from 'react'
import './App.css'
import Form from "./Form.jsx"

function App() {
  const income = 100
  const expense = 30
  let totalBalance = income - expense

  const [isFormOpen, setIsFormOpen] = useState(false)
  const handleEntryButton = () => {
    setIsFormOpen(true)
  }

  return (
  <>
    <Header/>
    <TotalBalance number = {totalBalance}/>
    <div className = "money-details-container">
      <MoneyInfo title = "Income" number = {income} type = "income"/>
      <button className = "add-entry-button" onClick = {() => handleEntryButton()}>Add Entry</button>
      <MoneyInfo title = "Expense" number = {expense} type = "expense"/>
    </div>
    {isFormOpen && <Form/>}
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
