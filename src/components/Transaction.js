import { useDispatch } from 'react-redux';
import { removeTransaction } from '../redux/transactionSlice';

export const Transaction = ({ transaction: { id, text, amount } }) => {
  const dispatch = useDispatch();

  const signSymbol = amount > 0 ? '+' : '-';
  const signText = amount > 0 ? 'plus' : 'minus';

  return (
    <li className={signText}>
      {text}
      <span>
        {signSymbol}${Math.abs(amount)}
      </span>
      <button
        onClick={() => dispatch(removeTransaction(id))}
        className='delete-btn'
      >
        x
      </button>
    </li>
  );
};
