import React from 'react'

const LoginPage = () => {
    return (
        <div className='card'>
            <div className='cardHeader'>
                Login 
            </div>
            <div className='cardBody'>
                <div className='inputGroup'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="email" placeholder="abd@xyz.com"/>
                </div>

                <div className='inputGroup'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" placeholder="Your Password"/>
                </div>
                <button>Login</button>
            </div> 
        </div>
    )
}

export default LoginPage; 
