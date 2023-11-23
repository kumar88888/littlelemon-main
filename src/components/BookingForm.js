import { useState } from "react";
import "./styles/BookingContent.css";
import qs from "qs";

function BookingForm(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      first_name: fName,
      last_name: lName,
      email: email,
      phone_number: tel,
      people: people,
      date: date,
      time: "18:00",
      additional_comments: comments,
    };
    console.log(info);

    formSubmit(qs.stringify(info));

    window.location.replace("http://localhost:3000/confirmation");
  };

  const formSubmit = (data) => {
    console.table(data);
  };

  const formattedDate = () => {
    var d = new Date();
    var cd = (num) => num.toString().padStart(2, 0);
    return d.getFullYear() + "-" + cd(d.getMonth() + 1) + "-" + cd(d.getDate());
  };

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState(formattedDate());
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);
    var stringify = e.target.value;
    const date = new Date(stringify);

    console.log(date);
    props.updateTimes(date);
    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fName">First Name</label> <br></br>
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={150}
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="lName">Last Name</label>
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          minLength={2}
          maxLength={150}
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email</label> <br></br>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="phonenum">Phone Number</label> <br></br>
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={tel}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setTel(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="people">Number of People</label> <br></br>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          required
          min={1}
          max={100}
          onChange={(e) => setPeople(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={(e) => handleDateChange(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" required>
          {finalTime}
        </select>
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label> <br></br>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>

      <div>
        <br></br>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <button type="submit" className="action-button">
          Book Table
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
