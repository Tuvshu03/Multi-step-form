import React from "react";
import FormInput from "./FormInput";

const StepOne = (props) => {
  const { handleNextStep, formValue, errors, handleError, setFormValue, clearError } =
    props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
    clearError(name)
  };
    const validateFirstName = (name) => {
      const regex = /^[A-Za-z]+$/;
      return regex.test(name);
    };
  
    const isStepOneValid = (data) =>{
    const {firstName} = data;
    const errors = {};
    let isValid = true;
  
    if(firstName.length <=1){
      isValid = false;
      errors.firstName = "First name cannot contain special characters or numbers";
      errors.lastName = "Last name cannot contain special characters or numbers";
      errors.userName = "Must contain two or more characters.";
    }
    return {isValid, errors};
  }
  const handleFormNextStep = () => {
    const { isValid, errors } = isStepOneValid(formValue);
    if (isValid && validateFirstName(formValue.firstName)) {
      const localData = {
        ...formValue,
        currentStep:1
      }
      localStorage.setItem("FormData", JSON.stringify(localData))
      handleNextStep();
    }
    handleError(errors);
    errors.firstName = "First name cannot contain special characters or numbers";
    errors.lastName = "Last name cannot contain special characters or numbers";
    errors.userName = "This username is already taken. Please choose another one.";
  };
  return (
    <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white justify-between rounded-lg">
      <div className="">
        <img src="./img/Main 1.png" />
        <p className="text-[26px] text-foreground font-semibold">Join Us! 😎</p>
        <p>Please provide all current information accurately</p>
      </div>
      <div className="w-full gap-2">
      <FormInput
        handleChange={handleChange}
        title={"First name"}
        name={"firstName"}
        placeholder={"Enter your first name"}
        errors={errors.firstName}
        value={formValue.firstName}
      />
      <FormInput
        handleChange={handleChange}
        title={"Last name"}
        name={"lastName"}
        placeholder={"Enter your last name"}
        errors={errors.lastName}
        value={formValue.lastName}
      />
      <FormInput
        handleChange={handleChange}
        title={"User name"}
        name={"userName"}
        placeholder={"Enter your user name"}
        errors={errors.userName}
        value={formValue.userName}
      />
      </div>
      <div
        onClick={handleFormNextStep}
        className="flex items-center justify-center w-full bg-black text-white border rounded-md p-2 cursor-pointer"
      >
        Continue 1/3
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M10.205 6L8.79504 7.41L13.375 12L8.79504 16.59L10.205 18L16.205 12L10.205 6Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
export default StepOne;
