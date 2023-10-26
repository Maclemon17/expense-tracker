import React, { useContext } from 'react'
import { GlobalContext } from '../contex/GlobalState'

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    // GET AMOUNTS
    const amounts = transactions.map(transaction => transaction.amount);
    // CALCULATE INCOME
    const income = amounts
    .filter(amount => amount > 0)
    .reduce((icomeBal, inc) => (icomeBal += inc), 0)
    .toFixed(2);

    // CALCULATE EXPENSE
    const expense = amounts
    .filter(amount => amount < 0)
    .reduce((icomeBal, exp) => (icomeBal += exp), 0) * -1
    .toFixed(2);


    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses