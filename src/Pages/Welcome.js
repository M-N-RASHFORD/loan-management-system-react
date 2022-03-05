import React from 'react';
import '../Styles/welcome.css';

const Welcome = ({ match, history }) => {
    const name = match.params.name;
    return (
        <center>
            <h2>Welcome { name }</h2>
            <button type="button" onClick={() => {
                history.push("/login");
            }}>Click here to continue</button>
        </center>
    );
}

export default Welcome;
