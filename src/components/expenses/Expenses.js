import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../expensesFilter/ExpensesFilter';
import { useState } from 'react';

export default function Expenses({ expensesData }) {
  const [selectedDateFilter, setSelectedDateFilter] = useState('');

  const filterChangeHandler = (date) => {
    setSelectedDateFilter(date);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChange={filterChangeHandler} />
        <ExpenseItem title={expensesData[0].title} amount={expensesData[0].amount} date={expensesData[0].date}></ExpenseItem>
        <ExpenseItem title={expensesData[1].title} amount={expensesData[1].amount} date={expensesData[1].date}></ExpenseItem>
        <ExpenseItem title={expensesData[2].title} amount={expensesData[2].amount} date={expensesData[2].date}></ExpenseItem>
        <ExpenseItem title={expensesData[3].title} amount={expensesData[3].amount} date={expensesData[3].date}></ExpenseItem>
      </Card>
    </div>
  );
}