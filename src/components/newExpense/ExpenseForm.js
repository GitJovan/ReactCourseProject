import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [formData, setFormData] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setFormData({
    //   ...formData,
    //   enteredTitle: event.target.value
    // });

    // setFormData((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value
    //   };
    // });
  };

  const amountChangeHander = (event) => {
    setEnteredAmount(event.target.value);
    // setFormData({
    //   ...formData,
    //   enteredAmount: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setFormData({
    //   ...formData,
    //   enteredDate: event.target.value
    // });
  };

  // const formChangeHandler = (controlIdentifier, value) => {
  //   if (controlIdentifier === 'title') {
  //     setEnteredTitle(value);
  //   } else if (controlIdentifier === 'date') {
  //     setEnteredDate(value);
  //   } else {
  //     setEnteredAmount(value);
  //   }
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onFormSubmit(newExpense);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };


  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHander} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}