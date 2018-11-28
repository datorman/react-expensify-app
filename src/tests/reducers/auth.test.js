import authReducer from './../../reducers/auth';

test('Should return UID', () =>{
    const action = {
        type: 'LOGIN',
        uid:123
    };
    const state = authReducer({},action);
    expect(state).toEqual({'uid':123});
});
test('Should return empty object', () =>{
    const action = {
        type: 'LOGOUT',
    };
    const state = authReducer({ 'uid':'123'},action);
    expect(state).toEqual({});
});