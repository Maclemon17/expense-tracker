import React, { useContext } from 'react'
import { GlobalContext } from '../contex/GlobalState'
import Transaction from './Transaction';

const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                { transactions.length > 0 ? (
                    transactions.map((transaction) => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))) : <i>Add new transaction to show history</i>
                }
            </ul>
        </>
    )
}

export default TransactionHistory