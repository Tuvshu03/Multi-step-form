
const validateName = (name) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(name);
    
  };
 export const isStepOneValid = (data) =>{
  const {firstName, lastName, userName} = data;
  const errors = {};
  let isValid = true;


  if(firstName.length <=1 && validateName(firstName)){
    isValid = false;
    errors.firstName = "First name cannot contain special characters or numbers";
  }
  if(lastName.length <=1 && !validateName(lastName)){
    isValid = false;
    errors.lastName = "Last name cannot contain special characters or numbers";
  }  if(userName.length <=1){
    isValid = false;
    errors.userName = "User name must contain two or more characters";
  }
  return {isValid, errors};
}