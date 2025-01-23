"use client";
import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FinishedForm from "./FinishedForm";
import { useState, useEffect } from "react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateBirth: "",
    profileImage: "",
  });
  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateBirth: "",
    profileImage: "",
  });
  const Step = [StepOne, StepTwo, StepThree, FinishedForm][currentStep];

  const handleNextStep = () => {
    if (currentStep !== 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const handleBackStep = () => {
    if (currentStep !== 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleError = (errors) => {
    setFormError((prev) => ({ ...prev, ...errors }));
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-transparent">
      <Step
        errors={formError}
        formValue={formValue}
        handleError={handleError}
        setFormValue={setFormValue}
        handleNextStep={handleNextStep}
        handleBackStep={handleBackStep}
      />
    </div>
  );
};

export default MultiStepForm;
