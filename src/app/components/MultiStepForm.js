"use client";
import React, { useRef } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FinishedForm from "./FinishedForm";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(2);
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

  const clearError = (name) => {
    setFormError((prev) => ({ ...prev, [name]:"" }));
  };

  useEffect(()=>{
    const data = localStorage.getItem("FormData")
  }, [])

  const AnimationVariants = {
    enter: {x:100, opacity:0},
    center: {x: 0, opacity:1},
    exit: {x:-100, opacity:0}
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100"> 
      <AnimatePresence> 
        <motion.div 
     key={currentStep}
     initial="enter"
     animate="center"
     exit="exit"
     variants={AnimationVariants}
     transition={{duration:0.6}}>  
        <Step
        errors={formError}
        formValue={formValue}
        handleError={handleError}
        clearError={clearError}
        setFormValue={setFormValue}
        handleNextStep={handleNextStep}
        handleBackStep={handleBackStep}
      />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MultiStepForm;
