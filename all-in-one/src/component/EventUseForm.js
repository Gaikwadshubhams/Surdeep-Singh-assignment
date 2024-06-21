import { useState } from "react";

const EventUseForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    attendingWithGuest: "no",
    guestName: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!values.name) newErrors.name = "Name is required";
    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!values.age || values.age <= 0) {
      newErrors.age = "Age must be a number greater than 0";
    }
    if (values.attendingWithGuest === "yes" && !values.guestName) {
      newErrors.guestName = "Guest Name is required if attending with a guest";
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
  };
};

export default EventUseForm;
