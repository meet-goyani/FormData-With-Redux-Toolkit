export const formValidation = (values) => {
  const error = {};

  if (!values.name) {
    error.name = "Name is required!";
  }

  if (!values.email) {
    error.email = "Email is required!";
  }
};
