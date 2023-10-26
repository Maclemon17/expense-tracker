import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionHistory from './components/TransactionHistory';

function App() {
	return (
		<>
			<Header />

			<div className="container">
				<Balance />
				<IncomeExpenses />
				<TransactionHistory />
				<AddTransaction />
			</div>
		</>
	);
}

export default App;
 