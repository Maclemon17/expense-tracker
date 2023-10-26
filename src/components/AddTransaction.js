import React, { useContext, useState } from 'react'
import { GlobalContext } from '../contex/GlobalState'

const AddTransaction = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext);

    // GENERATE RANDOM ID
    const generateID = () => Math.floor(Math.random() * 100000)

    const onSubmit = (e) => {
        e.preventDefault();

        if (name == " " || amount == 0 ) {
            alert("Please fill in the fields")
        } else {
            const newTransaction = {
                id: generateID(),
                name,
                amount: parseInt(amount)
            }
    
            addTransaction(newTransaction);
        }

    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter trans name..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        <small>(negative - expense, positive - income)</small>
                    </label>
                    <input type="number" value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction