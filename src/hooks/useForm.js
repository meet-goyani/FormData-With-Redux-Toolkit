import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userDataSlice";

const useForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    date: "",
    hobbies: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "hobbies") {
      const updatedHobbies = formData.hobbies.includes(value)
        ? formData.hobbies.filter((item) => item !== value)
        : [...formData.hobbies, value];
      // console.log(updatedHobbies, "updatedHobbies");
      setFormData((prevFormData) => ({
        ...prevFormData,
        hobbies: updatedHobbies,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name &&
      !formData.email &&
      !formData.gender &&
      !formData.date
    ) {
      setError("All filed are required!");
    } else {
      dispatch(addUser(formData));
    }
    setFormData({
      name: "",
      email: "",
      gender: "",
      date: "",
      hobbies: [],
    });
  };

  return { formData, error, handleChange, setFormData, handleSubmit };
};

export default useForm;
