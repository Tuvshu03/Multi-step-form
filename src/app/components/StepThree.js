import React from "react";

const StepThree = (props) => {
  const { handleNextStep, handleBackStep, errors, formValue, setFormValue } =
    props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="border rounded-[8px] w-[480px] h-[655px] p-8 flex flex-col justify-between items-start bg-white">
      <div>
        <img src="./img/Main 1.png" />
        <p className="text-[26px] text-foreground font-semibold">Join Us! 😎</p>
        <p>Please provide all current information accurately</p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label>
          Date of Birth
          <span className="text-red-500">*</span>
        </label>
        <input
          name={"dateBirth"}
          type="date"
          onChange={handleChange}
          placeholder="Enter your date"
          value={formValue}
          className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
        />
        {errors.dateBirth.length > 0 && <p className="text-red-500">{errors}</p>}
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
          onClick={handleNextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepThree;
