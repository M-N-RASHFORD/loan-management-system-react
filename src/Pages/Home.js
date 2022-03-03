import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Home = ({ match }) => {
    const auth = getAuth();
    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user logged in', user);
            } else {
                console.log('user has logged out');
            }
        });
    }, []);
    return (
        <div>
            <h2>Welcome admin</h2>
            <p>Your are currently loggedin as {match.params.email}</p>
        </div>
    );
}

export default Home;
