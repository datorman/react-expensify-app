import {login, logout} from './../../actions/auth';

test('Should generate login object with uid', () =>{
    const action = login(123);
    expect(action).toEqual({
        type:'LOGIN',
        uid: 123
    });

});
test('Should generate logout object', () => {
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT'
    });
})