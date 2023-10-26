import React, { useState } from 'react'

const AddTransaction = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)


    return (
        <>
            <h3>Add new transaction</h3>
            <form>
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