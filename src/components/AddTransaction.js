import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/transactionSlice';
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      text,
      amount: +amount
    };

    dispatch(addTransaction(newTransaction));
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
            placeholder='Enter text here...'
          ></input>
        </div>

        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (positive - income, negative - expense)
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type='number'
            placeholder='Enter amount here...'
          ></input>
        </div>

        <button className='btn' type='submit'>
          Add Transaction
        </button>
      </form>
    </>
  );
};
