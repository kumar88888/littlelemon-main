import React from "react";
import "../components/styles/TestimonialsCard.css";
import Dessert1 from "../components/assets/greek salad.jpg";
import Dessert2 from "../components/assets/bruchetta.svg";
import Dessert3 from "../components/assets/lemon dessert.jpg";

const TestimonialsCard = () => {
  const specialMenus = [
    {
      image: Dessert1,
      rating: "Rating",
      name: "Kame",
      comment: "Very nice placa",
    },
    {
      image: Dessert2,
      rating: "Rating",
      name: "Joe",
      comment: "Good meat",
    },
    {
      image: Dessert3,
      rating: "Rating",
      name: "Julie",
      comment: "Adorable veggies",
    },
    {
      image: Dessert2,
      rating: "Rating",
      name: "Tipico",
      comment: "Loving it",
    },
  ];

  const specialMenusItems = specialMenus.map((menu) => {
    const image = menu.image;
    const rating = menu.rating;
    const name = menu.name;
    const comment = menu.comment;

    return (
      <div key={name}>
        <div className="testimonials-card-container">
          <div className="testimonials-card-title">
            <p>{rating}</p>
          </div>
          <div className="image-container">
            <img src={image} alt="Person" />
            <h3>{name}</h3>
          </div>

          <div className="testimonials-card-text">
            <p>{comment}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="testimonials-card">{specialMenusItems}</div>
    </div>
  );
};

export default TestimonialsCard;
