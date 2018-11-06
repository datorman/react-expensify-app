import {createStore} from 'redux';

//Action generatprs
const incrementCount = ({incrementBy = 1} = {}) =>({
    type: 'INCREMENT',
    incrementBy,
});
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const resetCount = ({resetTo = 0} = {}) => ({
    type: 'RESET',
    resetTo: resetTo
});
const setCount = ({setTo = 0} = {}) =>({
    type: 'SET',
    setTo
});

// Reducers
// 1. Pure functions, output determined by input (only use variables which are passed in) should not interact with anything outside of function scope
// 2. Never change state or action 
const countReducer = (state = {count: 0}, action)=>{
    switch (action.type){
        case 'INCREMENT':
            return{
                count:state.count+action.incrementBy
            };
        case 'DECREMENT':
            return{
                count:state.count-action.decrementBy
            };
        case 'RESET':
            return{
                count:action.resetTo
            }
        case 'SET':
            return{
                count:action.setTo
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());
store.dispatch(resetCount({resetTo:5}));
store.dispatch(decrementCount({decrementBy:5}));
store.dispatch(setCount({setTo:10}));