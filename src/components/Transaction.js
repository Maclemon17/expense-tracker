import React from 'react'

const Transaction = ({transaction}) => {
    const { amount, name } = transaction;
    const sign = amount > 0 ? "+" : "-";
    
    return (
        <>
            <li className={amount > 0 ? "plus" : "minus"}>
                {name}
                <span>{sign}${Math.abs(amount)}</span>
                <button className="delete-btn">x</button>
            </li>
        </>
    )
}

export default Transaction