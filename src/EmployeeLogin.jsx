import React from 'react';
import PropTypes from 'prop-types';

export default function EmployeeLogin(props) {
    let User = 'Employee'
    let Password = 'Password';
    let inputUser = null;
    let inputPassword = null;

    function handleEmployeeLogin(employee) {
        employee.preventDefault();

        if (Password === inputPassword.value && User === inputUser.value) {
            props.onEmployeeLogin();
            password.value = '';
            user.value = '';
        } else {
            password.value = '';
            user.value = '';
        }
    }
    return (

        <div>
            <h4>Employee Login</h4>
            <form onSubmit={handleEmployeeLogin}>
                <input
                    id='user'
                    placeholder="Username"
                    type="text"
                    ref={(input) => { inputUser = input; }}
                />

                <input
                    id='password'
                    placeholder="password"
                    type="text"
                    ref={(input) => { inputPassword = input; }}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

EmployeeLogin.propTypes = {
    onEmployeeLogin: PropTypes.func
}