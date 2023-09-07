export function validate(email, password) {
  const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const passwordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
  if (emailValidate === true && passwordValidate === true) {
    return null;
  }
  if (emailValidate === false) {
    return "Email is Incorrect!!Please Check Your Email.";
  }
  if (passwordValidate === false) {
    return "Password is Incorrect!!Please Check Your Password.";
  }
}
