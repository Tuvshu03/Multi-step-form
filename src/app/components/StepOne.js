import React from "react";
import FormInput from "./FormInput";
import { isStepOneValid } from "../utils/StepOneValidation";
import { useEffect } from "react";

const StepOne = (props) => {
  const {
    handleNextStep,
    formValue,
    errors,
    handleError,
    setFormValue,
    clearError,
  } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
    clearError(name);
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("FormData"));
    if (savedData && savedData.currentStep === 1) {
      setFormValue({
        firstName: savedData.firstName || "",
        lastName: savedData.lastName || "",
        userName: savedData.userName || "",
      });
    }
  }, []); 

  const handleFormNextStep = () => {
    const { isValid, errors: validationErrors } = isStepOneValid(formValue);
    console.log(isValid, validationErrors);
    if (isValid) {
      const localData = {
        ...formValue,
        currentStep: 1,
      };
      localStorage.setItem("FormData", JSON.stringify(localData));
      handleError({});
      handleNextStep();
    } else {
      handleError(validationErrors);
    }
  };

  return (
    <div className="flex flex-col w-[480px] min-h-[550px] p-8 bg-white justify-between rounded-lg gap-3">
      <div>
        <img src="./img/Main 1.png" alt="Main Visual" />
        <p className="text-2xl text-foreground font-semibold">Join Us! 😎</p>
        <p className="text-lg">
          Please provide all current information accurately
        </p>
      </div>
      <div className="flex flex-col w-full gap-4">
        <FormInput
          handleChange={handleChange}
          title="First name"
          name="firstName"
          placeholder="Enter your first name"
          errors={errors.firstName}
          value={formValue.firstName}
        />
        <FormInput
          handleChange={handleChange}
          title="Last name"
          name="lastName"
          placeholder="Enter your last name"
          errors={errors.lastName}
          value={formValue.lastName}
        />
        <FormInput
          handleChange={handleChange}
          title="User name"
          name="userName"
          placeholder="Enter your user name"
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
