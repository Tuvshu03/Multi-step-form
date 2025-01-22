import React from "react";

const StepOne = (props) => {
  const { handleNextStep } = props;
  return (
    <div className="border rounded-[8px] w-[480px] h-[655px] p-8 flex flex-col justify-between items-start bg-white">
      <div>
        <p>Join us</p>
        <p>Please provide all current information accurately</p>
      </div>
      <div className="w-full">
        <label>
          First name
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
      <div
        onClick={handleNextStep}
        className="flex items-center justify-center w-full bg-black text-white border rounded-md p-2 cursor-pointer"
      >
        Continue
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
