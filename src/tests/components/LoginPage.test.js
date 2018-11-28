import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from './../../components/LoginPage';


let wrapper, startLogin;

beforeEach(()=>{
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage onClick = {startLogin}/>);
});

test('Should render Login page', () =>{
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin on button click', () =>{
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
