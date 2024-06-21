import { useState } from "react";

const SurveyUseForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    surveyTopic: "",
    programmingLanguage: "",
    techExperience: "",
    exerciseFrequency: "",
    dietPreference: "",
    qualification: "",
    fieldOfStudy: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!values.fullName) newErrors.fullName = "Full Name is required";
    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!values.surveyTopic) newErrors.surveyTopic = "Survey Topic is required";

    if (values.surveyTopic === "Technology") {
      if (!values.programmingLanguage)
        newErrors.programmingLanguage =
          "Favorite Programming Language is required";
      if (!values.techExperience || values.techExperience <= 0)
        newErrors.techExperience =
          "Years of Experience is required and must be greater than 0";
    }

    if (values.surveyTopic === "Health") {
      if (!values.exerciseFrequency)
        newErrors.exerciseFrequency = "Exercise Frequency is required";
      if (!values.dietPreference)
        newErrors.dietPreference = "Diet Preference is required";
    }

    if (values.surveyTopic === "Education") {
      if (!values.qualification)
        newErrors.qualification = "Highest Qualification is required";
      if (!values.fieldOfStudy)
        newErrors.fieldOfStudy = "Field of Study is required";
    }

    if (!values.feedback || values.feedback.length < 50)
      newErrors.feedback =
        "Feedback is required and must be at least 50 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      alert(JSON.stringify(values, null, 2));
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues,
  };
};

export default SurveyUseForm;
