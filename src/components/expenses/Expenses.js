import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../expensesFilter/ExpensesFilter';
import React, { useState } from 'react';

export default function Expenses({ expensesData }) {
  const [expanses, setExpanses] = useState(expensesData);
  const [selectedYearFilter, setSelectedYearFilter] = useState('2020');

  const filterChangeHandler = (year) => {
    setSelectedYearFilter(year);
    applyFilter(year);
  }

  const applyFilter = (year) => {
    if (!!selectedYearFilter) {
      const filteredData = expensesData.filter(expense => expense.date.getFullYear().toString() === year);
      setExpanses(filteredData);
    } else {
      setExpanses(expensesData);
    }
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYearFilter} onFilterChange={filterChangeHandler} />
        {expanses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}></ExpenseItem>)}
      </Card>
    </div>
  );
}