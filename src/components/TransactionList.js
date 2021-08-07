import { useSelector } from 'react-redux';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions } = useSelector((state) => state.transaction);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
