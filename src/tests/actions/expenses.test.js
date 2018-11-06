import {addExpense, editExpense, removeExpense} from './../../actions/expenses';

test('Should setup remove expense', () => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('Should setup edit expense object', () => {
    const action = editExpense('abc123',{note:'newnote val'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'abc123',
        updates:{
            note:'newnote val'
        }
    });
});

test('Should set up add expense object WITH ADDED VALUES', () =>{
    const expenseData = {
        description:'rent',
        amount:109500,
        createdAt: 1000,
        notes:'test'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});
test('Should set up add expense object WITHOUT ADDED VALUES', () =>{
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            notes : '',
            amount : 0,
            createdAt : 0
        }
    });
});