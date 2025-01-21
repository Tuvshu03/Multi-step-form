"use client"
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepTwo";
import FinishedForm from "./components/FinishedForm";
import { useState } from "react";
export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const Step = [StepOne, StepTwo, StepThree, FinishedForm][currentStep];

  const handleNextStep = () => {
    if(currentStep !==3){
      setCurrentStep((prevStep)=>{
        prevStep+1;
      })
    }
  }
  const handleBackStep = () => {
    if(currentStep !==0){
      setCurrentStep((prevStep)=>{
        prevStep-1;
      })
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Step handleBackStep={handleBackStep} handleNextStep={handleNextStep}/>
    </div>
  );
}
