import React from 'react';
import LoginPage from './../../components/LoginPage';
import {shallow} from 'enzyme';

let wrapper, startLogin;

beforeEach(()=>{
    wrapper = shallow(<LoginPage/>)
});

test('Should render Login page', () =>{
    expect(wrapper).toMatchSnapshot();
})
test('Should call startLogin on button click', () =>{

});