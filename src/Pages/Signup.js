import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import '../Styles/signup.css';

const Signup = () => {
    const [admin, setAdmin] = React.useState({
        fullnames: '',
        email: '',
        password: ''
    });
    const handleChange = (event) => {
        setAdmin({
            ...admin, [event.target.name]: event.target.value
        });
    }
    const handleSignup = (event) => {
        event.preventDefault();

    }
    return (
        <div className="container-content">
            <div className="header">
                <h2>Welcome to XXX bank</h2>
                <h2>Only admins are allowed here</h2>
                <p>Add another admin from here</p>
            </div>
            <div className="signup-form-content" style={{paddingBottom: '10%', transform: 'translateY(-13%)'}}>
                <form className="signup-form-content" onSubmit={handleSignup}>
                    <p>Add admin from here</p>
                    <input type="text" name="fullnames" placeholder="Full names" onChange={handleChange} value={admin.fullnames}
                        className="signup-input-content"
                    />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} value={admin.email}
                        className="signup-input-content"
                    />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} value={admin.password}
                        className="signup-input-content"
                    />
                    <input type="submit" value="Add admin"/>
                </form>
            </div>
        </div>
    );
}

export default Signup;
