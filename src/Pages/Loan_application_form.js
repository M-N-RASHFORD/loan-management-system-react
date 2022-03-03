import React from 'react';
import '../Styles/loan_application.css';

const AddLoans = () => {
    return (
        <div className="application-content">
            <div className="left-content">
                <h2>XXX Bank Loan Application form</h2>
                <p  style={{color: '#000'}}>Add loans from here</p>
                <p></p>
            </div>
            <div className="right-content">
                <form>
                    <p>Personal info</p>
                    <div className="div-content">
                        <input type="text" placeholder="First name"
                            className="application-input-content" required
                        />
                        <input type="text" placeholder="Last name"
                            className="application-input-content" required
                        />
                    </div>
                    <div className="div-content">
                        <input type="text" placeholder="Other names"
                            className="application-input-content" required
                        />
                        <input type="email" placeholder="Email"
                            className="application-input-content" required
                        />
                    </div>
                    <div className="div-content">
                        <input type="number" placeholder="NIN"
                            className="application-input-content" required
                        />
                        <input type="text" placeholder="Gender"
                            className="application-input-content" required
                        />
                    </div>
                    <p>Occupational info</p>
                    <div className="div-content">
                        <input type="text" placeholder="Occupation"
                            className="application-input-content" required
                        />
                        <input type="text" placeholder="Employer (Optional if self employed)"
                            className="application-input-content"
                        />
                    </div>
                    <div className="div-content">
                        <input type="number" placeholder="Monthly income"
                            className="application-input-content"
                        />
                        <input type="number" placeholder="Annual income"
                            className="application-input-content" required
                        />
                    </div>
                    <p>Loan info</p>
                    <div className="div-content">
                        <input type="number" placeholder="Principal amount"
                            className="application-input-content" required
                        />
                        <input type="number" placeholder="Duration of the loan"
                            className="application-input-content" required
                        />
                        <div className="div-content">
                            <input type="number" placeholder="Amount per month"
                                className="application-input-content" required
                            />
                            <button type="submit">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddLoans;
