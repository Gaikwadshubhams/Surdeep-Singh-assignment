import React from "react";
import useForm from "../component/SurveyUseForm";
import axios from "axios";
import { useEffect, useState } from "react";
import Heder from "./Heder";

const SurveyForm = () => {
  const { values, errors, handleChange, handleSubmit, setValues } = useForm();

  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  useEffect(() => {
    if (values.surveyTopic) {
      axios
        .get(`https://api.example.com/questions?topic=${values.surveyTopic}`)
        .then((response) => {
          setAdditionalQuestions(response.data);
        })
        .catch((error) => {
          console.error("Error fetching additional questions", error);
        });
    }
  }, [values.surveyTopic]);
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
              placeholder="FULL NAME"
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
              placeholder="EMAIL ADDRESS"
              value={values.email}
              onChange={handleChange}
              className="inputBox"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="inputGroup">
            <label>Survey Topic</label>
            <select
              name="surveyTopic"
              value={values.surveyTopic}
              onChange={handleChange}
              className="inputBox"
            >
              <option value="">Select Topic</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
            {errors.surveyTopic && (
              <p className="error">{errors.surveyTopic}</p>
            )}
          </div>

          {values.surveyTopic === "Technology" && (
            <>
              <div className="inputGroup">
                <label>Favorite Programming Language</label>
                <select
                  name="programmingLanguage"
                  value={values.programmingLanguage}
                  onChange={handleChange}
                  className="inputBox"
                >
                  <option value="">Select Language</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C#">C#</option>
                </select>
                {errors.programmingLanguage && (
                  <p className="error">{errors.programmingLanguage}</p>
                )}
              </div>

              <div className="inputGroup">
                <label>Years of Experience</label>
                <input
                  type="number"
                  name="techExperience"
                  value={values.techExperience}
                  onChange={handleChange}
                  className="inputBox"
                />
                {errors.techExperience && (
                  <p className="error">{errors.techExperience}</p>
                )}
              </div>
            </>
          )}

          {values.surveyTopic === "Health" && (
            <>
              <div className="inputGroup">
                <label>Exercise Frequency</label>
                <select
                  name="exerciseFrequency"
                  value={values.exerciseFrequency}
                  onChange={handleChange}
                  className="inputBox"
                >
                  <option value="">Select Frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>
                {errors.exerciseFrequency && (
                  <p className="error">{errors.exerciseFrequency}</p>
                )}
              </div>

              <div className="inputGroup">
                <label>Diet Preference</label>
                <select
                  name="dietPreference"
                  value={values.dietPreference}
                  onChange={handleChange}
                  className="inputBox"
                >
                  <option value="">Select Diet</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
                {errors.dietPreference && (
                  <p className="error">{errors.dietPreference}</p>
                )}
              </div>
            </>
          )}

          {values.surveyTopic === "Education" && (
            <>
              <div className="inputGroup">
                <label>Highest Qualification</label>
                <select
                  name="qualification"
                  value={values.qualification}
                  onChange={handleChange}
                  className="inputBox"
                >
                  <option value="">Select Qualification</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
                {errors.qualification && (
                  <p className="error">{errors.qualification}</p>
                )}
              </div>

              <div className="inputGroup">
                <label>Field of Study</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={values.fieldOfStudy}
                  onChange={handleChange}
                  className="inputBox"
                />
                {errors.fieldOfStudy && (
                  <p className="error">{errors.fieldOfStudy}</p>
                )}
              </div>
            </>
          )}

          <div className="inputGroup">
            <label>Feedback</label>
            <textarea
              name="feedback"
              value={values.feedback}
              onChange={handleChange}
              className="inputBox"
            ></textarea>
            {errors.feedback && <p className="error">{errors.feedback}</p>}
          </div>

          {additionalQuestions.map((question, index) => (
            <div key={index}>
              <label>{question.text}</label>
              <input
                type={question.type}
                name={`additionalQuestion${index}`}
                value={values[`additionalQuestion${index}`] || ""}
                onChange={handleChange}
                className="inputBox"
              />
              {errors[`additionalQuestion${index}`] && (
                <p className="error">{errors[`additionalQuestion${index}`]}</p>
              )}
            </div>
          ))}

          <button className="btn registerBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Heder>
  );
};

export default SurveyForm;
