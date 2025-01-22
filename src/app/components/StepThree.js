import React from "react";

const StepThree = (props) => {
  const { handleNextStep, handleBackStep } = props;
  return (
    <div className="border rounded-[8px] w-[480px] h-[655px] p-8 flex flex-col justify-between items-start bg-white">
     <div>
        <p>Join us</p>
        <p>Please provide all current information accurately</p>
      </div>
      <div>
        <label>
          dateBirth
          <span className="text-red-500">*</span>
        </label>
        <input
          // name={name}
          // type={type}
          // value={value}
          // onChange={onChange}
          placeholder="Овгоо оруулна уу"
          className="mt-1 block w-full px-3 py-2 rounded-md border-gray-500 focus:outline-blue-500 text-black"
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
          onClick={handleNextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepThree;
