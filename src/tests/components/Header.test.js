import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './../../components/Header';

let startLogout;

beforeEach(()=>{
    startLogout = jest.fn();
});

test('should render header correctly', () =>{
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    //expect(wrapper.find('h1').text()).toBe('Expensify Project');
    const wrapper = shallow(<Header onClick={() =>{}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout on button click', () =>{
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});