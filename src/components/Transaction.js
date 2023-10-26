import React, { useContext } from 'react'
import { GlobalContext } from '../contex/GlobalState';

const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    
    const { amount, name, id } = transaction;
    const sign = amount > 0 ? "+" : "-";
    
    return (
        <>
            <li className={amount > 0 ? "plus" : "minus"}>
                {name}
                <span>{sign}${Math.abs(amount)}</span>
                <button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
            </li>
        </>
    )
}

export default Transaction