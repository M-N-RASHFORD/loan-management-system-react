import React from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import '../Styles/login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', password: '', error_message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleLogin = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user_ = userCredential.user;
            console.log('successfully logged in', user_.uid);
            this.props.history.push(`/home/${email}`);
        }).catch((e) =>{
            let _error_message = '';
            if (e.message) {
                _error_message = 'Your account doesnt exist';
            } else {
                _error_message = ''
            }
            this.setState({
                error_message: _error_message
            });
        });
    }
    componentDidMount = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
            } else {
                console.log('user signed out');
            }
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
                        <input type="button"  value="LOGIN" onClick={this.handleLogin}/>
                        <p>contact any admin to sign you up.</p>
                        <p>Info@xxxbank.co.ug</p>
                        <p>{this.state.error_message}</p>
                    </form>
                </div>
            </center>
        );
    }
}

export default Login;
