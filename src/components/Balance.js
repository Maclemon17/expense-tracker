import React, { useContext } from 'react'
import { GlobalContext } from '../contex/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    
    // GET AMOUNTS
    const amounts = transactions.map(transactions => transactions.amount);
    // CALCUALATE BALANCE
    const acctBalance = amounts.reduce((accBal, amount) => (accBal += amount), 0).toFixed(2);


    return (
        <>
            <h4>Your Balance</h4>
            <h1>${acctBalance}</h1>
        </>
    )
}

export default Balance