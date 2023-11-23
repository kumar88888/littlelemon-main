import React from 'react';
import "../components/styles/Testimonials.css"
import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
    return (
      <div className="testimonials-section-container">
      <div className="testimonials-section-title">
            <h1>Testimonials</h1>
      </div>
      <TestimonialsCard />
      </div>
    )
}

export default Testimonials;