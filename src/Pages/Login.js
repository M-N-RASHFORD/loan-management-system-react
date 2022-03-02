import React from 'react';
import '../Styles/login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render(){
        return (
            <center>
                <h1>XXX Banks Loan mag't system</h1>
                <p>Login if your administrator</p>
                <div className="form-content">
                    <form>
                        <input type="email" name="email" placeholder="Email" className="input-content"
                            onChange={this.handleChange} value={this.state.email}
                        />
                        <input type="password" name="password" placeholder="Password" className="input-content"
                            onChange={this.handleChange} value={this.state.password}
                        />
                        <input type="submit"  value="LOGIN"/>
                        <p>contact any admin to sign you up.</p>
                        <p>Info@xxxbank.co.ug</p>
                    </form>
                </div>
            </center>
        );
    }
}

export default Login;
