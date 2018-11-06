import moment from 'moment';
import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from './../../actions/filters';


test('Should generate set start date action object', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });
});
test('Should generate set end date action object', () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });
});
test('Should generate sort by amount object', () =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});
test('Should generate sort by date object', () =>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});
test('Should generate empty text for text filter', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
});
test('Should generate empty text for text filter WITH TEXT', () => {
    const action = setTextFilter('abcd');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'abcd'
    })
});