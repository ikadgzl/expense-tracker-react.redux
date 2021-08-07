import { createSlice } from '@reduxjs/toolkit';

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 1400 },
      { id: 3, text: 'Book', amount: -70 },
      { id: 4, text: 'Dinner', amount: -140 },
      { id: 5, text: 'Side Hustle', amount: 220 }
    ]
  },
  reducers: {
    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },

    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    }
  }
});

export const { removeTransaction, addTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
