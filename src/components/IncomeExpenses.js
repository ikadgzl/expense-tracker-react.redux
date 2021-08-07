import { useSelector } from 'react-redux';

export const IncomeExpenses = () => {
  const { transactions } = useSelector((state) => state.transaction);

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0)
    .toFixed(2);

  const expenses = (
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, curr) => acc + curr.amount, 0) * -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+${income}</p>
      </div>

      <div>
        <h4>Expenses</h4>
        <p className='money minus'>-${expenses}</p>
      </div>
    </div>
  );
};
