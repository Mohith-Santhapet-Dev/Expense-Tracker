

function Form(props) {


    return (
        <form className = "form" onSubmit = {props.handleSubmitButton}>
            <div className = "form-section">
                <h5 className = "form-subheading">Description</h5>
                <input placeholder="write a description" className = "form-input description"/>
            </div>
            <div className = "form-section">
                <h5 className = "form-subheading">Amount</h5>
                <input placeholder="$0.00" className = "form-input amount"/>
            </div>
            <div className = "form-section">
                <h5 className = "form-subheading">Type</h5>
                <select className = "type-dropdown">
                    <option>Expense</option>
                    <option>Income</option>
                </select>
            </div>
            <button type = "submit"className = "submit-button">Submit</button>
        </form>
    )
}

export default Form