import React, { useState, useEffect } from 'react';
import meetn from '../assets/meetn.jpg';
import mtnnn from '../assets/mtnnn.jpg';
import smmmm from '../assets/smmmm.jpg';
import vvvvv from '../assets/vvvvv.jpg';

const FounderSection = () => {
  const images = [meetn, mtnnn, smmmm, vvvvv];
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="founder-section"
      style={{
        background: '#fef8f0',
        padding: '100px 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px', color: '#4b0082' }}>
        Meet Our Founder
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '700px', marginBottom: '50px' }}>
        The heart of Vlisco lies in its founder’s vision. Passionate about fabrics, innovation, 
        and quality, they have guided Vlisco to combine elegance, creativity, and sustainability 
        in every product. Learn more about their journey and the principles that inspire our work.
      </p>

      <div
        className="founder-carousel"
        style={{
          position: 'relative',
          maxWidth: '500px',
          width: '100%',
          marginBottom: '40px',
        }}
      >
        <img
          src={images[current]}
          alt="Founder"
          style={{
            width: '100%',
            height: '450px',
            objectFit: 'cover',
            borderRadius: '30px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
            transition: 'opacity 0.7s ease-in-out',
          }}
        />

        {/* Carousel Buttons */}
        <button
          className="prev"
          onClick={() => setCurrent((current - 1 + images.length) % images.length)}
          style={{
            position: 'absolute',
            top: '50%',
            left: '-40px',
            transform: 'translateY(-50%)',
            background: '#7b2ff7',
            color: '#fff',
            border: 'none',
            padding: '12px 16px',
            fontSize: '1.5rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.background = '#f107a3')}
          onMouseOut={(e) => (e.target.style.background = '#7b2ff7')}
        >
          ‹
        </button>

        <button
          className="next"
          onClick={() => setCurrent((current + 1) % images.length)}
          style={{
            position: 'absolute',
            top: '50%',
            right: '-40px',
            transform: 'translateY(-50%)',
            background: '#7b2ff7',
            color: '#fff',
            border: 'none',
            padding: '12px 16px',
            fontSize: '1.5rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.background = '#f107a3')}
          onMouseOut={(e) => (e.target.style.background = '#7b2ff7')}
        >
          ›
        </button>
      </div>

      <div
        className="founder-details"
        style={{
          maxWidth: '600px',
          textAlign: 'center',
          background: '#fff',
          padding: '30px 20px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        }}
      >
        <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '10px' }}>Jane Doe</h3>
        <p style={{ color: '#7b2ff7', fontWeight: '600', marginBottom: '15px' }}>Founder & CEO</p>
        <p style={{ fontStyle: 'italic', color: '#555', fontSize: '1.1rem' }}>
          "I started Vlisco to combine passion, creativity, and quality in every fabric we craft.
          Our mission is to empower businesses with fabrics that inspire confidence and professionalism."
        </p>
      </div>
    </section>
  );
};

export default FounderSection;
