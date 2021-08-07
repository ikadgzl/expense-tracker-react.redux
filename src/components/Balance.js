import { useSelector } from 'react-redux';

export const Balance = () => {
  const { transactions } = useSelector((state) => state.transaction);

  const totalMoney = transactions
    .reduce((acc, curr) => acc + curr.amount, 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${totalMoney}</h1>
    </>
  );
};
