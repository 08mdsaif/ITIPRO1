import React, { useRef, useState } from 'react';
// import logo from './assets/itipro-logo.svg';
import logo from './assets/logo.jpeg';

const API_URL = 'https://itipro1-1.onrender.com/api';

const successSteps = [
  'Learn technology and build your profile.',
  'Do live practical projects.',
  'Involve in research and improve.',
  'Claim internship + placement support + jobs.'
];

const contactFlow = [
  { option: 'Option 1', left: 'Apply internship through online link + QR.', right: '' },
  { option: 'Option 2', left: '', right: 'Call our customer care no: +91 9191 000 000' },
  { option: 'Option 3', left: 'WhatsApp our customer care no: +91 9190 000 000', right: '' },
  { option: 'Option 4', left: '', right: 'Email our customer care id: care@itipro.in' },
  { option: 'Option 5', left: 'Enquire in our office for full details.', right: '' }
];

function App() {
  const [isLoginView, setIsLoginView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const formRef = useRef(null);

  const jumpToRegistration = () => {
    setIsLoginView(false);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      college: formData.get('college'),
      qualification: formData.get('qualification'),
      interestedDomain: formData.get('interestedDomain'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword')
    };

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setMessageType('success');
        setMessage('Registration successful! Redirecting to login...');
        localStorage.setItem('token', result.token);
        setTimeout(() => {
          setIsLoginView(true);
          setMessage('');
        }, 2000);
        e.target.reset();
      } else {
        setMessageType('error');
        setMessage(result.message || 'Registration failed');
      }
    } catch (error) {
      setMessageType('error');
      setMessage('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData(e.target);
    const data = {
      emailOrPhone: formData.get('emailOrPhone'),
      password: formData.get('password')
    };

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setMessageType('success');
        setMessage('Login successful! Welcome ' + result.student.fullName);
        localStorage.setItem('token', result.token);
        localStorage.setItem('student', JSON.stringify(result.student));
        e.target.reset();
      } else {
        setMessageType('error');
        setMessage(result.message || 'Login failed');
      }
    } catch (error) {
      setMessageType('error');
      setMessage('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <main className="container">
        <header className="hero">
          <p className="hero-brand">Institute of Technology Innovation (ITIPRO)</p>
          <h1>Internship - We are Hiring for EV</h1>
          <div className="hero-strip">
            <img src={logo} alt="ITIPRO logo" className="logo" />
            <div className="hero-note">
              <h3>We are hiring for EV</h3>
              <p><strong>Mode:</strong> Hybrid</p>
              <p>Online + Offline</p>
              <p>Emerging Niche: EV & Charging</p>
            </div>
            <div className="battery">⚡ EV</div>
          </div>
        </header>

        <section className="card">
          <h2>Registration Fees</h2>
          <p><strong>INR:</strong> ₹7,999 per person (India, including GST)</p>
          <p><strong>USD:</strong> $100 (for other countries)</p>
          <p><strong>Group Discount Offer</strong></p>
          <ul>
            <li>Group of 5+ will get 5% discount.</li>
            <li>Group of 10+ will get 10% discount.</li>
          </ul>
          <div className="register-line">
            <p><strong>Duration:</strong> 1-6 months</p>
            <button type="button" className="register-btn" onClick={jumpToRegistration}>Register Here</button>
          </div>
          <p><strong>YouTube:</strong> Link</p>
          <p><strong>WhatsApp:</strong> Link</p>
        </section>

        <section className="card">
          <h2>Program Details (Online / Offline)</h2>
          <div className="mode-grid">
            <div>
              <h3>Online</h3>
              <p>Date: To be announced</p>
              <p>Time: Shared after registration</p>
              <p>Platform: Google Meet</p>
            </div>
            <div>
              <h3>Offline</h3>
              <p>Date: To be announced</p>
              <p>Time: Shared after registration</p>
              <p>Venue: ITIPRO center</p>
            </div>
          </div>
          <h3>Perks</h3>
          <ul>
            <li>QR verified offer letter and internship certificate.</li>
            <li>Pre-placement support (4.5-6.5 LPA guidance).</li>
          </ul>
          <h3>Eligibility</h3>
          <p>College students, freshers, and any graduates are welcome.</p>
        </section>

        <section className="flow-sheet">
          <h2>How to succeed in Internship / Courses / Inplant Training?</h2>
          <div className="success-steps">
            {successSteps.map((text, i) => (
              <article className="step-bubble" key={text}>
                <span className="step-number">{i + 1}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <h2 className="boxed-title">How to Contact ITIPRO for Attending Internship?</h2>
          <div className="contact-map">
            {contactFlow.map((item) => (
              <div className="contact-row" key={item.option}>
                <div className={`speech-card ${!item.left ? 'ghost' : ''}`}>{item.left || ' '}</div>
                <div className="option-node">{item.option}</div>
                <div className={`speech-card ${!item.right ? 'ghost' : ''}`}>{item.right || ' '}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="auth-section" ref={formRef}>
          <div className="auth-tabs">
            <button className={!isLoginView ? 'active' : ''} onClick={() => setIsLoginView(false)} type="button">Registration</button>
            <button className={isLoginView ? 'active' : ''} onClick={() => setIsLoginView(true)} type="button">Login</button>
          </div>

          {message && (
            <div className={`message ${messageType}`}>
              {message}
            </div>
          )}

          {!isLoginView ? (
            <form className="form" onSubmit={handleRegistration}>
              <h3>Student Registration</h3>
              <div className="field-row">
                <label>Full Name<input type="text" name="fullName" placeholder="Enter full name" required /></label>
                <label>Email<input type="email" name="email" placeholder="Enter email" required /></label>
              </div>
              <div className="field-row">
                <label>Phone<input type="tel" name="phone" placeholder="Enter mobile number" required /></label>
                <label>College / University<input type="text" name="college" placeholder="Enter college name" required /></label>
              </div>
              <div className="field-row">
                <label>Qualification<select name="qualification" required><option value="">Select</option><option>B.Tech</option><option>BCA</option><option>MCA</option><option>Other Graduate</option></select></label>
                <label>Interested Domain<select name="interestedDomain" required><option value="">Select</option><option>EV Technology</option><option>Web Development</option><option>Data Science</option><option>Digital Marketing</option></select></label>
              </div>
              <div className="field-row">
                <label>Password<input type="password" name="password" placeholder="Create password" required /></label>
                <label>Confirm Password<input type="password" name="confirmPassword" placeholder="Confirm password" required /></label>
              </div>
              <button className="submit" type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register Now'}</button>
            </form>
          ) : (
            <form className="form" onSubmit={handleLogin}>
              <h3>Student Login</h3>
              <div className="field-row single">
                <label>Email or Phone<input type="text" name="emailOrPhone" placeholder="Enter email or mobile" required /></label>
              </div>
              <div className="field-row single">
                <label>Password<input type="password" name="password" placeholder="Enter password" required /></label>
              </div>
              <button className="submit" type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
