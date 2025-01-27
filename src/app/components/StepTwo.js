import React from "react";
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
    clearError("");
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = stepTwoValidation(formValue);
    if (isValid) {
      const localData = {
        ...formValue,
        currentStep:2
      }
      localStorage.setItem("FormData", JSON.stringify(localData))
      handleNextStep();
    }
    handleError(errors);
  };

  return (
    <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg justify-between">
      <div>
        <img src="./img/Main 1.png" />
        <p className="text-[26px] text-foreground font-semibold">Join Us! 😎</p>
        <p>Please provide all current information accurately</p>
      </div>
      <div>
        <FormInput
          handleChange={handleChange}
          title={"Email"}
          name={"email"}
          placeholder={"Enter your email name"}
          errors={errors.email}
          value={formValue.email}
        />
        <FormInput
          handleChange={handleChange}
          title={"Phone number"}
          name={"phoneNumber"}
          placeholder={"Enter your phone number"}
          errors={errors.phoneNumber}
          value={formValue.phoneNumber}
        />
        <FormInput
          handleChange={handleChange}
          title={"Password"}
          name={"password"}
          placeholder={"Enter your password"}
          errors={errors.password}
          value={formValue.password}
         
        />

        <FormInput
          handleChange={handleChange}
          title={"Confirm password"}
          name={"confirmPassword"}
          placeholder={"Repeat password"}
          errors={errors.confirmPassword}
          value={formValue.confirmPassword}
        
        />
      </div>
      <div className="flex w-full gap-2">
        <button
          className="w-1/3 bg-white text-black border border-[#CBD5E1] rounded-md p-2"
          onClick={handleBackStep}
        >
          Back
        </button>
        <button
          className="w-2/3 bg-black text-white border rounded-md p-2"
          onClick={handleFormNextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
