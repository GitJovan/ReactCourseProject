import './Expenses.css'
import ExpenseItem from './ExpenseItem';

export default function Expenses({ expensesData }) {

  return (
    <div className="expenses">
      <ExpenseItem title={expensesData[0].title} amount={expensesData[0].amount} date={expensesData[0].date}></ExpenseItem>
      <ExpenseItem title={expensesData[1].title} amount={expensesData[1].amount} date={expensesData[1].date}></ExpenseItem>
      <ExpenseItem title={expensesData[2].title} amount={expensesData[2].amount} date={expensesData[2].date}></ExpenseItem>
      <ExpenseItem title={expensesData[3].title} amount={expensesData[3].amount} date={expensesData[3].date}></ExpenseItem>
    </div>
  );
}