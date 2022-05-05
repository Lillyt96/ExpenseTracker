import './NewExpense.css';

import ExpenseForm from './ExpenseForm'

const NewExpense = () => {
    function saveExpenseData() = {
        
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData ></ExpenseForm>
        </div>
    );
};

export default NewExpense;