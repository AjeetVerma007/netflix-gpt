export const validateFormData = (email, password, name) => {
  const errors = [];

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  if (!isEmailValid) {
    errors.push("Email ID is not valid. ");
  }

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!isPasswordValid) {
    errors.push(
      "Password must be 8+ characters and include an uppercase letter, a number, and a special character "
    );
  }

  if (name !== undefined) {
    const isNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
    if (!isNameValid) {
      errors.push("Please enter a valid Full Name ");
    }
  }

  return errors.length > 0 ? errors : null;
};
