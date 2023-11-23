import React from "react";
import "./styles/BookingContent.css";
import BookingForm from "./BookingForm";
import { useReducer } from "react";

function BookingPage() {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let newDate = new Date(date);
    let random = seededRandom(newDate.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <div className="res-content-wrapper">
      <div className="res-content-container">
        <div className="text">
          <h2>Experience the perfect balance of tradition and luxury.</h2>
          <p>
            At Little Lemon, we take great pride in providing our customers with
            the greatest luxurious experience with a touch of <em>tradition</em>
            .
          </p>
          <p>Book a table with us to share in this experience.</p>
        </div>
        <div className="form">
          <h1>Reserve a Table</h1>
          <p>
            Please fill in and submit form to book your reservation at Little
            Lemon.
          </p>
          <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
