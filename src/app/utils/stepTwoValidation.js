export const stepTwoValidation = (data) => {

  const {email, phoneNumber, password, confirmPassword} = data;
  const errors = {};
  let isValid = true;

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regex.test(password);
    
  }


  if (!validateEmail(email)) {
    isValid = false;
    errors.email = "Please provide a valid email address";
  }

  if (phoneNumber.length !== 8 && isNaN(phoneNumber)) {
    isValid = false;
    errors.phoneNumber = "Phone number must contain 8 number";
  }
  
  if(!validatePassword(password)){
    isValid = false;
    errors.password = "password contain at least eight characters, at least one uppercase letter, one lowercase letter, symbols and numbers"
  }

  if(confirmPassword!==password){
    isValid = false;
    errors.confirmPassword = "Password do not match";
  }
  return { isValid, errors };
};
