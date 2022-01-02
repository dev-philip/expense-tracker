import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';


const NewExpense = (props) => {

    const [isEditing , setIsEditing] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        // console.log(expenseData)
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick= {startEditingHandler}> Add New Expenses</button>}
           {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={ onSaveExpenseDataHandler } />}
        </div>
    )
}

export default NewExpense;