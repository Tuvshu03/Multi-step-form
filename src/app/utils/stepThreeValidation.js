
const validateName = (name) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(name);
    
  };
 export const stepThreeValid = (data) =>{
  const {dateBirth} = data;
  const errors = {};
  let isValid = true;
  const today = new Date();
  const birthDate = new Date(dateBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  if(age<18){
    isValid = false;
    errors.dateBirth = "Date must be 18 or older";
  }
  return {isValid, errors};
}