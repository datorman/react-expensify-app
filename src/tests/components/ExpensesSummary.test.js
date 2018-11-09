import React from 'react';
import {ExpensesSummary} from './../../components/ExpensesSummary';
import {shallow} from 'enzyme';



test('Should render expense total message for 1 item', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={123} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render expense total message for 2 item', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={123123123} />);
    expect(wrapper).toMatchSnapshot();
});