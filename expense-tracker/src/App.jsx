import { use, useState } from 'react'
import './App.css'
import Form from "./Form.jsx"
import Entry from "./Entry.jsx"




function App() {

  const [entries, setEntries] = useState([])
  const entryObject = {
    description: "",
    amount: 0,
    type: ""
  }

  const [income, setIncome] = useState(0)
  let [expense, setExpense] = useState(0)
  let totalBalance = income - expense

  const [isFormOpen, setIsFormOpen] = useState(false)
  const handleEntryButton = () => {
    setIsFormOpen(true)
  }

  function handleSubmitButton(e) {
    e.preventDefault()
    const entryDescription = document.querySelector(".form-input.description").value
    const entryAmount = document.querySelector(".form-input.amount").value
    const entryType = document.querySelector(".type-dropdown").value
    entryObject.description = entryDescription
    entryObject.amount = entryAmount
    entryObject.expense = entryType

    if(entryType === "Income") {
      entryObject.type = "income"
      setIncome(income + entryAmount)
    }
    else {
      entryObject.type = "expense"
      setExpense(expense + entryAmount)
    }

      
    setEntries([...entries, entryObject])
    console.log(entryObject.type)
    setIsFormOpen(false)
    
  }

  return (
  <>
    <Header/>
    <TotalBalance number = {totalBalance}/>
    <div className = "money-details-container">
      <MoneyInfo title = "Income" number = {Number(income)} type = "income"/>
      <button className = "add-entry-button" onClick = {() => handleEntryButton()}>Add Entry</button>
      <MoneyInfo title = "Expense" number = {Number(expense)} type = "expense"/>
    </div>
    {entries.map((entry) => {
      return <Entry description = {entry.description} amount = {entry.amount} type = {entry.type.toLowerCase()}/>
    })}
    {isFormOpen && <Form handleSubmitButton = {(e) => handleSubmitButton(e)}/>}
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
