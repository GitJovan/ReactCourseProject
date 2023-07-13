import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense(props) {
  const newExpenseHandler = (newExpense) => {
    const expenseData = { id: Math.random().toString(), ...newExpense };

    props.onNewExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onFormSubmit={newExpenseHandler} />
    </div>
  )
}