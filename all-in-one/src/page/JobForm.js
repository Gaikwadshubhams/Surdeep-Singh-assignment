import React from "react";
import useForm from "../component/JobUseForm";
import Heder from "./Heder";

const JobForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleCheckboxChange,
    handleDateChange,
    handleSubmit,
  } = useForm();
  return (
    <Heder>
      <div className="homePageWrapper">
        <form className="formWrapper" onSubmit={handleSubmit}>
          <div className="formHedging">
            <h1>REGISTER</h1>
          </div>
          <div className="inputGroup">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="FUll NAME"
              value={values.fullName}
              onChange={handleChange}
              className="inputBox"
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>
          <div className="inputGroup">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={values.email}
              onChange={handleChange}
              className="inputBox"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="inputGroup">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="PHONE NUMBER"
              value={values.phoneNumber}
              onChange={handleChange}
              className="inputBox"
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="inputGroup">
            <label>Applying for Position</label>
            <select
              name="position"
              value={values.position}
              onChange={handleChange}
              className="inputBox"
            >
              <option value="">Select Position</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.position && <p className="error">{errors.position}</p>}
          </div>
          {(values.position === "Developer" ||
            values.position === "Designer") && (
            <div className="inputGroup">
              <label>Relevant Experience (Years)</label>
              <input
                type="number"
                name="experience"
                value={values.experience}
                onChange={handleChange}
                className="inputBox"
              />
              {errors.experience && (
                <p className="error">{errors.experience}</p>
              )}
            </div>
          )}
          {values.position === "Designer" && (
            <div className="inputGroup">
              <label>Portfolio URL</label>
              <input
                type="url"
                name="portfolioUrl"
                value={values.portfolioUrl}
                onChange={handleChange}
                className="inputBox"
              />
              {errors.portfolioUrl && (
                <p className="error">{errors.portfolioUrl}</p>
              )}
            </div>
          )}
          {values.position === "Manager" && (
            <div className="inputGroup">
              <label>Management Experience</label>
              <textarea
                name="managementExperience"
                value={values.managementExperience}
                onChange={handleChange}
                className="inputBox"
              ></textarea>
              {errors.managementExperience && (
                <p className="error">{errors.managementExperience}</p>
              )}
            </div>
          )}
          <div className="inputGroup">
            <label>Additional Skills</label>
            <div>
              <input
                type="checkbox"
                name="skills"
                value="JavaScript"
                checked={values.skills.includes("JavaScript")}
                onChange={handleCheckboxChange}
                className="inputBox"
              />{" "}
              JavaScript
            </div>
            <div>
              <input
                type="checkbox"
                name="skills"
                value="CSS"
                checked={values.skills.includes("CSS")}
                onChange={handleCheckboxChange}
                className="inputBox"
              />{" "}
              CSS
            </div>
            <div>
              <input
                type="checkbox"
                name="skills"
                value="Python"
                checked={values.skills.includes("Python")}
                onChange={handleCheckboxChange}
                className="inputBox"
              />{" "}
              Python
            </div>
            {errors.skills && <p className="error">{errors.skills}</p>}
          </div>
          <div className="inputGroup">
            <label>Preferred Interview Time</label>
            <input
              type="datetime-local"
              name="interviewTime"
              value={values.interviewTime}
              onChange={handleDateChange}
              className="inputBox"
            />
            {errors.interviewTime && (
              <p className="error">{errors.interviewTime}</p>
            )}
          </div>
          <button className="btn registerBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Heder>
  );
};

export default JobForm;
