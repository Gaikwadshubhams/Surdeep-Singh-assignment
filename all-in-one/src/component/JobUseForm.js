import { useState } from "react";

const JobUseForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    position: "",
    experience: "",
    portfolioUrl: "",
    managementExperience: "",
    skills: [],
    interviewTime: "",
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
    if (!values.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (
      ["Developer", "Designer"].includes(values.position) &&
      (!values.experience || values.experience <= 0)
    ) {
      newErrors.experience =
        "Relevant Experience is required and must be a number greater than 0";
    }
    if (values.position === "Designer" && !values.portfolioUrl) {
      newErrors.portfolioUrl = "Portfolio URL is required";
    } else if (
      values.position === "Designer" &&
      values.portfolioUrl &&
      !/^(http|https):\/\/[^ "]+$/.test(values.portfolioUrl)
    ) {
      newErrors.portfolioUrl = "Portfolio URL is invalid";
    }
    if (values.position === "Manager" && !values.managementExperience) {
      newErrors.managementExperience = "Management Experience is required";
    }
    if (values.skills.length === 0) {
      newErrors.skills = "At least one skill must be selected";
    }
    if (!values.interviewTime) {
      newErrors.interviewTime = "Preferred Interview Time is required";
    } else if (isNaN(Date.parse(values.interviewTime))) {
      newErrors.interviewTime = "Preferred Interview Time is invalid";
    }

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

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      skills: prevState.skills.includes(value)
        ? prevState.skills.filter((skill) => skill !== value)
        : [...prevState.skills, value],
    }));
  };

  const handleDateChange = (event) => {
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
    handleCheckboxChange,
    handleDateChange,
    handleSubmit,
  };
};

export default JobUseForm;
