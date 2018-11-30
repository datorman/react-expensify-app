import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from './../selectors/expenses';
import selectExpensesTotal from './../selectors/expenses-total';
import {Link} from 'react-router-dom';

export const ExpensesSummary = ({expenseCount,expenseTotal}) => {
    return(
        <div className="page-header">
            <div className="content-container">
                <h2 className = "page-header__title">Viewing <span>{expenseCount}</span> {expenseCount===1 ? 'expense':'expenses'} totaling <span>{numeral(expenseTotal/100).format('$0,0.00')}</span></h2>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div> 
    );   
};


// Not needed but saving for ref
// export const ExpenseSummary = (props) => (
//     <div>
//       {props.expenses.length===0?'': <h3>Viewing {props.expenses.length} expenses totaling {numeral(expensesTotal(props.expenses)/100).format('$0,0.00')}</h3>}
//     </div>   
// );
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return{
        expenseCount:visibleExpenses.length,
        expenseTotal:selectExpensesTotal(visibleExpenses)
    }
};
export default connect(mapStateToProps)(ExpensesSummary);