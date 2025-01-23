import React from "react";
import FormInput from "./FormInput";
import { isStepOneValid } from "../utils/isValid";

const StepOne = (props) => {
  const { handleNextStep, formValue, errors, handleError, setFormValue } =
    props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepOneValid(formValue);
    if (isValid) {
      handleNextStep();
    }
    handleError(errors);
  };
  return (
    <div className="border rounded-[8px] w-[480px] h-1/2 p-8 flex flex-col justify-between items-start bg-white">
      <div>
        <img src="./img/Main 1.png" />
        <p className="text-[26px] text-foreground font-semibold">Join Us! 😎</p>
        <p>Please provide all current information accurately</p>
      </div>
      <div className="w-full">
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
        Continue
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
