import React, { useState } from 'react';

const Footer = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you shortly.');
    setData({ name: '', email: '', message: '' });
  };

  return (
    <footer id="footer">
      <div className="footer-grid">
        <div>
          <h3>Vlisco</h3>
          <p>Premium fabrics for corporate & sales clients. Natural elegance in linen, cashmere, and wool.</p>
          <p>Email: info@vlisco.com</p>
          <p>Phone: +44 123 456 7890</p>
        </div>

        <div>
          <h4>Policies & Support</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Customer Support</a></li>
          </ul>
        </div>

        <div>
          <h4>Request Prospectus</h4>
          <p>Receive our detailed catalog of fabrics and services.</p>
          <a href="mailto:info@vlisco.com">Request Now</a>
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
    </footer>
  );
};

export default Footer;
