import React, { useState } from 'react';

const Footer = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [openAccordion, setOpenAccordion] = useState(null); // track which accordion is open

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you shortly.');
    setData({ name: '', email: '', message: '' });
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <footer id="footer">
      <div className="footer-grid">
        <div>
          <h3>Vlisco</h3>
          <p>Premium fabrics for corporate & sales clients. Natural elegance in linen, cashmere, and wool.</p>
          
          <br></br>
          <p>General / Sales / Orders: <a href="mailto:info@vlisco.work">info@vlisco.work</a></p>
          <br></br>
          <p>Customer Complaints: <a href="mailto:customerservice@vlisco.work">customerservice@vlisco.work</a></p>
          <br></br>
          <p>Collaborations / Discounts: <a href="mailto:mariepatricialars@vlisco.work">mariepatricialars@vlisco.work</a></p>
          <br></br>
         <p>Phone: +47 4534 7856</p>

        </div>

        <div>
          <h4>Policies & Support</h4>
          <div className="accordion">
            <div className="accordion-item">
              <button onClick={() => toggleAccordion(0)}>
                Privacy Policy
              </button>
              {openAccordion === 0 && (
                <div className="accordion-content">
                  <p>We value your privacy and never share your personal information with third parties. All data is stored securely in compliance with international standards.</p>
                  <p>Our cookies are only used to improve your browsing experience and tailor our services to your preferences.</p>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <button onClick={() => toggleAccordion(1)}>
                Refund Policy
              </button>
              {openAccordion === 1 && (
                <div className="accordion-content">
                  <p>We offer hassle-free refunds within 14 days of purchase. Simply contact our customer service to initiate a refund.</p>
                  <p>All returns must include original packaging, and items must be unworn and unused.</p>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <button onClick={() => toggleAccordion(2)}>
                Terms & Conditions
              </button>
              {openAccordion === 2 && (
                <div className="accordion-content">
                  <p>All sales are subject to our terms and conditions. By purchasing from Vlisco, you agree to our policies on product usage, liability, and warranty.</p>
                  <p>We reserve the right to update these terms at any time; please check back regularly.</p>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <button onClick={() => toggleAccordion(3)}>
                Shipping & Delivery
              </button>
              {openAccordion === 3 && (
                <div className="accordion-content">
                  <p>All shipping is done from Norway using reliable international carriers.</p>
                  <p>Delivery times typically range from 3–10 business days, depending on your location. Tracking information is provided for all shipments.</p>
                  <p>Customs duties and taxes are the responsibility of the recipient.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h4>Request Prospectus</h4>
          <p>Receive our detailed catalog of fabrics and services.</p>
          <a href="mailto:info@vlisco.work">Request Now</a>
        </div>

        <div>
          <h4>Contact Us</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Email" required />
            <textarea name="message" value={data.message} onChange={handleChange} placeholder="Message" rows="4" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="bottom-bar">&copy; {new Date().getFullYear()} Vlisco. All rights reserved.</div>

      {/* Optional CSS for accordion */}
      <style jsx>{`
  .accordion button {
    width: 100%;
    text-align: left;
    padding: 10px;
    background: #4B0082; /* dark purple */
    color: #ffffff;       /* white text */
    border: none;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 5px;
    border-radius: 5px;
  }
  .accordion button:hover {
    background: #6A0DAD; /* lighter purple on hover */
  }
  .accordion-content {
    padding: 10px;
    background: #f8f8f8;  /* light gray for readability */
    color: #000000;       /* black text */
    border-left: 3px solid #4B0082;
    margin-bottom: 10px;
    border-radius: 0 5px 5px 0;
  }
`}</style>

    </footer>
  );
};

export default Footer;
