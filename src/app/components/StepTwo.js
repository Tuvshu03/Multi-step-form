import React, { useState, useEffect} from "react";
import FormInput from "./FormInput";
import { stepTwoValidation } from "../utils/stepTwoValidation";

const StepTwo = (props) => {
  const {
    handleBackStep,
    handleNextStep,
    formValue,
    errors,
    handleError,
    setFormValue,
    clearError,
  } = props;

  const [showPassword, setShowPassword] = useState("password");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
    clearError(name);
  };

  const handleFormNextStep = () => {
    const { isValid, errors: validationErrors } = stepTwoValidation(formValue);

    if (isValid) {
      const localData = {
        ...formValue,
        currentStep: 2,
      };
      localStorage.setItem("FormData", JSON.stringify(localData));
      handleError({}); 
      handleNextStep();
    } else {
      handleError(validationErrors);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg justify-between gap-3">
      <div>
        <img src="./img/Main 1.png" alt="Main Visual" />
        <p className="text-[26px] text-foreground font-semibold">Join Us! 😎</p>
        <p>Please provide all current information accurately</p>
      </div>

      <div className="flex flex-col justify-end gap-4">
        <FormInput
          handleChange={handleChange}
          title="Email"
          name="email"
          placeholder="Enter your email name"
          errors={errors.email}
          value={formValue.email}
        />
        <FormInput
          handleChange={handleChange}
          title="Phone number"
          name="phoneNumber"
          placeholder="Enter your phone number"
          errors={errors.phoneNumber}
          value={formValue.phoneNumber}
        />
        <FormInput
          handleChange={handleChange}
          title="Password"
          name="password"
          placeholder="Enter your password"
          errors={errors.password}
          value={formValue.password}
          type={showPassword}
        />
        <FormInput
          handleChange={handleChange}
          title="Confirm password"
          name="confirmPassword"
          placeholder="Repeat password"
          errors={errors.confirmPassword}
          value={formValue.confirmPassword}
          type={showPassword}
        />

        <div className="w-full flex justify-end gap-4 mb-5">
          Show password
          <input type="checkbox" onChange={handleShowPassword} />
        </div>
      </div>

      <div className="flex w-full gap-2 mb-10">
        <button
          className="w-1/3 bg-white text-black border border-[#CBD5E1] rounded-md p-2"
          onClick={handleBackStep}
        >
          Back
        </button>
        <button
          className="cursor-pointer w-2/3 bg-black text-white border rounded-md p-2"
          onClick={handleFormNextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
