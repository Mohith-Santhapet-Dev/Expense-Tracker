
function Entry(props) {
    return (
        <div className = {`entry-container ${props.type}`}>
            <h1 className = "entry-description">{props.description}: </h1>
            <h1 className = "entry-amount">${props.amount}</h1>
        </div>
    )
}

export default Entry