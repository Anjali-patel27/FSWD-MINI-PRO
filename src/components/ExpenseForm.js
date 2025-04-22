import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ onAdd }) => {
  const [expense, setExpense] = useState({ title: '', amount: '', category: '' });

  const handleChange = e => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/expenses', expense);
    onAdd(res.data);
    setExpense({ title: '', amount: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={expense.title} onChange={handleChange} placeholder="Title" required />
      <input name="amount" value={expense.amount} onChange={handleChange} placeholder="Amount" type="number" required />
      <input name="category" value={expense.category} onChange={handleChange} placeholder="Category" />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
