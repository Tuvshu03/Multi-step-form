import React from "react";
import FormInput from "./FormInput";
import { isStepOneValid } from "../utils/isValid";

const StepTwo = (props) => {
  const { handleBackStep, handleNextStep, formValue, errors, handleError, setFormValue  } = props;
  
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
    <div className="border rounded-[8px] w-[480px] h-[655px] p-8 flex flex-col justify-between items-start bg-white">
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
        placeholder={"Enter your phone number name"}
        errors={errors.phoneNumber}
        value={formValue.phoneNumber}
      />
      <FormInput
        handleChange={handleChange}
        title={"Password"}
        name={"password"}
        placeholder={"Enter your password name"}
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
