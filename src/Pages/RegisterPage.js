import React from 'react'

const RegisterPage = () => {
    return (
        <div className='card'>
            <div className='cardHeader'>
                Register 
            </div>
            <div className='cardBody'>
                <div className='inputGroup'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name" id="name" placeholder="Your name"/>
                </div>

                <div className='inputGroup'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="email" placeholder="abd@xyz.com"/>
                </div>

                <div className='inputGroup'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" placeholder="Your Password"/>
                </div>
                <button>Register</button>
            </div> 
        </div>
    )
}

export default RegisterPage; 
 