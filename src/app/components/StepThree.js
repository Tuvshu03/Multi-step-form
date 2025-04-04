import React, { useState, useEffect } from "react";
import { stepThreeValid } from "../utils/stepThreeValidation";

const StepThree = (props) => {
  const {
    handleNextStep,
    handleBackStep,
    errors,
    formValue,
    setFormValue,
    clearError,
    handleError
  } = props;

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const savedFormValue = JSON.parse(localStorage.getItem("FormData"));
    if (savedFormValue && savedFormValue.profileImage) {
      setSelectedImage(savedFormValue.profileImage);
      setFormValue((prev)=>({
        ...prev,
        profile:savedFormValue.profileImage
      }))
    }
  }, [setFormValue]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
    clearError(name);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setSelectedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);

    setFormValue((prev) => ({
      ...prev,
      profileImage: file,
    }));
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = stepThreeValid(formValue);
    if (isValid) {
      const localData = {
        ...formValue,
        currentStep:3
      }
      localStorage.setItem("FormData", JSON.stringify(localData))
      handleNextStep();
    }
    handleError(errors);
  };

  return (
    <div className="border rounded-[8px] w-[480px] h-[655px] p-8 flex flex-col justify-between items-start bg-white">
      <div>
        <img src="./img/Main 1.png" alt="Main" />
        <p className="text-[26px] text-foreground font-semibold">Join Us! 😎</p>
        <p>Please provide all current information accurately</p>
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="w-full gap-10">
          <label className="p-3 text-xl">
            Date of Birth
            <span className="text-red-500">*</span>
          </label>
          <input
            name={"dateBirth"}
            type="date"
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
            value={formValue.dateBirth}
            className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
          />
          {errors.dateBirth.length > 0 && <p className="text-red-500">{errors.dateBirth}</p>
          }
        </div>

        {!selectedImage ? (
          <div className="w-full gap-10 p-3 text-xl">
            <label>
              Profile Image
              <span className="text-red-500">*</span>
            </label>

            <input
              name="profileImage"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316] h-48"
            />
            {errors.profileImage.length > 0 && (
              <p className="text-red-500 text-sm">{errors.profileImage}</p>
            )}
          </div>
        ) : (
          <img src={selectedImage} alt="uploaded profile" />
        )}
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
          disabled={selectedImage==="g"}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepThree;
