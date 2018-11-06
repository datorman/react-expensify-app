import expensesReducer from './../../reducers/expenses';
import expenses from './../fixtures/expenses';

test ('should set default state', () =>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expense by id', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('Should not remove expense if id not found', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () =>{
    const newExpense = {
        description: 'New Expense',
        notes: 'New Note',
        amount: 1095,
        createdAt: 100
    };
    const action = {
        type:'ADD_EXPENSE',
        expense: newExpense
    };   
    const state = expensesReducer(expenses,action);
    //expect(state).toContain(newExpense);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense', () =>{
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            description:'New Description' 
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state[1]).toEqual({...expenses[1],description:'New Description'});
});
test('should not edit expense if expense not found', () =>{
    const action = {
        type:'EDIT_EXPENSE',
        id: '-1',
        updates:{
            description:'New Description' 
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});