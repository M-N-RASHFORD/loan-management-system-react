import React from 'react';
import '../Styles/welcome.css';

const Welcome = ({ match, history }) => {
    const name = match.params.name;
    return (
        <div className="body-welcome">
        <center className="">
            <h2>Welcome { name }</h2>
            <button type="button" onClick={() => {
                history.push("/login");
            }}>Click here to continue</button>
        </center>
        </div>
    );
}

export default Welcome;
