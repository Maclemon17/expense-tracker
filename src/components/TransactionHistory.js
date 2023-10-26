import React from 'react'

const TransactionHistory = () => {
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>
                <li className="plus">
                    Cash <span>+$700</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </>
    )
}

export default TransactionHistory