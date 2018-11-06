import moment from 'moment';
import filtersReducer from './../../reducers/filters';

test('Should set up default filters values', () =>{
    const state = filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test ('should set sortBy to amount', () =>{
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', ()=>{
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SET_TEXT_FILTER', text:'abcd'};
    const state = filtersReducer(currentState,action);
    expect(state.text).toBe('abcd');
});
test('should set startDate filter', () => {
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const startDate = moment().startOf('month');
    const action = {type: 'SET_START_DATE',startDate};
    const state = filtersReducer(currentState,action);
    expect(state.startDate).toBe(startDate);    
});
test('Should set end date filter', () => {
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const endDate = moment().endOf('month');
    const action = {type: 'SET_END_DATE',endDate};
    const state = filtersReducer(currentState,action);
    expect(state.endDate).toBe(endDate);  
});