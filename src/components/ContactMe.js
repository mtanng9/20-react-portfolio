function ContactMe() {
    // complain about no text
    const handleFocusOff = (name, e) => {
        let el = document.getElementById(`contact-me-${name}`);
        if ( el === null || el.value.trim() === '') {
            document.getElementById(`${name}-error`).textContent = 'This field is required';
        } else {
            document.getElementById(`${name}-error`).textContent = '';
        }
    }

    // complain about email
    const handleEmailOnChange = (e) => {
        const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        let email = e.target.value;
        if (email.match(regex) === null) {
            document.getElementById('email-error-2').textContent = 'Enter a correct email';
        } else {
            document.getElementById('email-error-2').textContent = '';
        }
    };

    return (
        <div className="contact-me-container">
            <h2>Contact Me</h2>
            <div className="mb-3">
                <label htmlFor="contact-me-name" className="form-label">Name</label>
                <input 
                    type="text" className="form-control" id="contact-me-name" 
                    placeholder="My Tang" onBlur={() => handleFocusOff('name')} 
                />
                <p className="error" id="name-error"></p>
            </div>
            <div className="mb-3">
                <label htmlFor="contact-me-email" className="form-label">Email Address</label>
                <input 
                    type="email" className="form-control" id="contact-me-email" placeholder="name@example.com" 
                    onChange={handleEmailOnChange} onBlur={() => handleFocusOff('email')}
                />
                <p className="error" id="email-error"></p>
                <p className="error" id="email-error-2"></p>

            </div>
            <div className="mb-3">
                <label htmlFor="contact-me-message" className="form-label">Message</label>
                <textarea 
                    className="form-control" id="contact-me-message" rows="3"
                    onBlur={() => handleFocusOff('message')}
                ></textarea>
                <p className="error" id="message-error"></p>
            </div>
            <button type="button" className="btn btn-primary" id="contact-me-form-submit" disabled>Submit</button>
        </div>
    );
}

export default ContactMe;