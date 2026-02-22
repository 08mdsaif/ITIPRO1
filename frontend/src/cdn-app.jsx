const { useRef, useState } = React;

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
  const formRef = useRef(null);

  const jumpToRegistration = () => {
    setIsLoginView(false);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="page">
      <main className="container">
        <header className="hero">
          <p className="hero-brand">Institute of Technology Innovation (ITIPRO)</p>
          <h1>Internship - We are Hiring for EV</h1>
          <div className="hero-strip">
            <img src="./src/assets/itipro-logo.svg" alt="ITIPRO logo" className="logo" />
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

          {!isLoginView ? (
            <form className="form">
              <h3>Student Registration</h3>
              <div className="field-row">
                <label>Full Name<input type="text" placeholder="Enter full name" required /></label>
                <label>Email<input type="email" placeholder="Enter email" required /></label>
              </div>
              <div className="field-row">
                <label>Phone<input type="tel" placeholder="Enter mobile number" required /></label>
                <label>College / University<input type="text" placeholder="Enter college name" required /></label>
              </div>
              <div className="field-row">
                <label>Qualification<select required><option value="">Select</option><option>B.Tech</option><option>BCA</option><option>MCA</option><option>Other Graduate</option></select></label>
                <label>Interested Domain<select required><option value="">Select</option><option>EV Technology</option><option>Web Development</option><option>Data Science</option><option>Digital Marketing</option></select></label>
              </div>
              <div className="field-row">
                <label>Password<input type="password" placeholder="Create password" required /></label>
                <label>Confirm Password<input type="password" placeholder="Confirm password" required /></label>
              </div>
              <button className="submit" type="submit">Register Now</button>
            </form>
          ) : (
            <form className="form">
              <h3>Student Login</h3>
              <div className="field-row single">
                <label>Email or Phone<input type="text" placeholder="Enter email or mobile" required /></label>
              </div>
              <div className="field-row single">
                <label>Password<input type="password" placeholder="Enter password" required /></label>
              </div>
              <button className="submit" type="submit">Login</button>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
