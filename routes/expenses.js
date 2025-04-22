const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Add a new expense
router.post('/', async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log the request body

    const { title, amount, category } = req.body;

    if (!title || !amount) {
      return res.status(400).json({ error: 'Title and amount are required' });
    }

    const newExpense = new Expense({ title, amount, category });
    const savedExpense = await newExpense.save();
    res.json(savedExpense);
  } catch (err) {
    console.error('Server Error:', err.message);
    res.status(500).json({ error: 'Server error', message: err.message });
  }
});

module.exports = router;
