import {startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses} from './../../actions/expenses';
import expenses from '../fixtures/expenses';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id,description,note,amount,createdAt})=>{
        expensesData[id] = {description,note,amount,createdAt};
    });
    database.ref('expenses').set(expensesData).then(()=>{done();});
});

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenses[2],
        }
    });
});

test('Should add expense to db and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description:'Mouse',
        amount:3000,
        notes:'Gaming Mouse',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});
test('Should add expense with defaults to db and store', () => {
    const store = createMockStore({});
    const expenseData = {
        description : '', 
        notes : '', 
        amount : 0, 
        createdAt : 0
    };
    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should set up set expense action object with data', () =>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
});
test('Should fetch expenses from db', (done) =>{
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

// test('Should set up add expense object WITHOUT ADDED VALUES', () =>{
//     const action = addExpense();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '', 
//             notes : '',
//             amount : 0,
//             createdAt : 0
//         }
//     });
// });