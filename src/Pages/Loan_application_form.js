import React from 'react';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import '../Styles/loan_application.css';

const AddLoans = () => {
    const [loans, setLoans] = React.useState({
        firstname: '', lastname: '', email: '', othernames: '', nin: '', gender: '', occupation: '',
        employer: '', monthly_income: '', annual_income: '', pricipal: '', duration: '', amount_per_month: ''
    });
    const [loanMessage, setLoanMessage] = React.useState('');
    const [erroMessage, setErrorMessage] = React.useState('');
    let loan_message = '';
    let loan_error = '';
    const handleChange = (event) => {
        setLoans({
            ...loans, [event.target.name]: event.target.value
        });
    }
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const database = getFirestore();
            const { firstname, lastname, othernames, email, nin,
                gender, occupation, employer, monthly_income, annual_income, pricipal, duration, amount_per_month
            } = loans
            const applicant = await addDoc(collection(database, 'loans'), {
                firstname: firstname,
                lastname: lastname,
                othernames: othernames,
                email: email,
                NIN: nin,
                gender: gender,
                occupation: occupation,
                employer: employer,
                monthly_income: monthly_income,
                annual_income: annual_income,
                pricipal: pricipal,
                duration: duration,
                amount_per_month: amount_per_month
            });
            setLoanMessage('Successfully added the loan');
            console.log('added loan to the database successfully', applicant);
            setLoans({firstname: '', lastname: '', email: '', othernames: '', nin: '', gender: '', occupation: '',
            employer: '', monthly_income: '', annual_income: '', pricipal: '', duration: '', amount_per_month: ''});
        } catch (e) {
            if (e) {
                setErrorMessage('Failed to add loan, something went wrong');
            } else {
                setErrorMessage('');
            }
            console.log('error occure, failed to add loan', e);
        }
    }
    return (
        <div className="application-content">
            <div className="left-content">
                <h2>XXX Bank Loan Application form</h2>
                <p  style={{color: '#000'}}>Add loans from here</p>
                <p>{erroMessage}</p>
                <span>{loanMessage}</span>
            </div>
            <div className="right-content">
                <form>
                    <p>Personal info</p>
                    <div className="div-content">
                        <input type="text" placeholder="First name" value={loans.firstname}
                            className="application-input-content" required onChange={handleChange} name="firstname"
                        />
                        <input type="text" placeholder="Last name" value={loans.lastname}
                            className="application-input-content" required onChange={handleChange} name="lastname"
                        />
                    </div>
                    <div className="div-content">
                        <input type="text" placeholder="Other names" value={loans.othernames}
                            className="application-input-content" required onChange={handleChange} name="othernames"
                        />
                        <input type="email" placeholder="Email" value={loans.email}
                            className="application-input-content" required onChange={handleChange} name="email"
                        />
                    </div>
                    <div className="div-content">
                        <input type="text" placeholder="NIN" value={loans.nin}
                            className="application-input-content" required onChange={handleChange} name="nin"
                        />
                        <input type="text" placeholder="Gender" value={loans.gender}
                            className="application-input-content" required onChange={handleChange} name="gender"
                        />
                    </div>
                    <p>Occupational info</p>
                    <div className="div-content">
                        <input type="text" placeholder="Occupation" value={loans.occupation}
                            className="application-input-content" required onChange={handleChange} name="occupation"
                        />
                        <input type="text" placeholder="Employer (Optional if self employed)" value={loans.employer}
                            className="application-input-content" onChange={handleChange} name="employer"
                        />
                    </div>
                    <div className="div-content">
                        <input type="number" placeholder="Monthly income" value={loans.monthly_income}
                            className="application-input-content" onChange={handleChange} name="monthly_income"
                        />
                        <input type="number" placeholder="Annual income" value={loans.annual_income}
                            className="application-input-content" required onChange={handleChange} name="annual_income"
                        />
                    </div>
                    <p>Loan info</p>
                    <div className="div-content">
                        <input type="number" placeholder="Principal amount" value={loans.pricipal}
                            className="application-input-content" required onChange={handleChange} name="pricipal"
                        />
                        <input type="number" placeholder="Duration of the loan" value={loans.duration}
                            className="application-input-content" required onChange={handleChange} name="duration"
                        />
                        <div className="div-content">
                            <input type="number" placeholder="Amount per month" value={loans.amount_per_month}
                                className="application-input-content" required onChange={handleChange} name="amount_per_month"
                            />
                            <button type="button" onClick={handleSubmit}>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddLoans;
