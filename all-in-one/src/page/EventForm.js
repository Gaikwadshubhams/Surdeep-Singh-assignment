import React from "react";
import useForm from "../component/EventUseForm";
import Heder from "./Heder";
const EventForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm();
  return (
    <Heder>
      <div className="homePageWrapper">
        <form className="formWrapper" onSubmit={handleSubmit}>
          <div className="formHedging">
            <h1>REGISTER</h1>
          </div>
          <div className="inputGroup">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="FUll NAME"
              value={values.name}
              onChange={handleChange}
              className="inputBox"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="inputGroup">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              value={values.email}
              onChange={handleChange}
              className="inputBox"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="inputGroup">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="AGE"
              value={values.age}
              onChange={handleChange}
              className="inputBox"
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>
          <div className="inputGroup">
            <label>Are you attending with a guest?</label>
            <select
              name="attendingWithGuest"
              value={values.attendingWithGuest}
              onChange={handleChange}
              className="inputBox"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          {values.attendingWithGuest === "yes" && (
            <div className="inputGroup">
              <label>Guest Name</label>
              <input
                type="text"
                name="guestName"
                value={values.guestName}
                onChange={handleChange}
                className="inputBox"
              />
              {errors.guestName && <p className="error">{errors.guestName}</p>}
            </div>
          )}
          <button className="btn registerBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Heder>
  );
};

export default EventForm;
