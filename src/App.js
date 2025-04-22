import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/expenses').then(res => setExpenses(res.data));
  }, []);

  const total = expenses.reduce((acc, exp) => acc + exp.amount, 0);

  return (
    <div>
      <h1>Expense Manager</h1>
      <ExpenseForm onAdd={exp => setExpenses([...expenses, exp])} />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
      <h2>Total: ₹{total}</h2>
    </div>
  );
};

export default App;
