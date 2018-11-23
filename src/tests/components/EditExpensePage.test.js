import React from 'react';
import {shallow} from 'enzyme';
import expenses from './../fixtures/expenses';
import {EditExpensePage} from './../../components/EditExpensePage';

let startRemoveExpense, startEditExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense= jest.fn();
    history={ push:jest.fn()};
    wrapper = shallow(<EditExpensePage
        expense={expenses[1]} 
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense}
        history={history}/>);
});

test('Should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
});

test('Should handle removeExpense', () => {
    wrapper.find('button').prop('onClick')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[1].id});
});