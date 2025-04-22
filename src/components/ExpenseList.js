import React from 'react';
import axios from 'axios';

const ExpenseList = ({ expenses, setExpenses }) => {
  const handleDelete = async id => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    setExpenses(expenses.filter(exp => exp._id !== id));
  };

  return (
    <ul>
      {expenses.map(exp => (
        <li key={exp._id}>
          {exp.title} - ₹{exp.amount} [{exp.category}]
          <button onClick={() => handleDelete(exp._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
