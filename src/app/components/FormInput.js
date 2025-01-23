import React from "react";

const FormInput = (props) => {
  const { placeholder, handleChange, name, title, errors, value} = props;
  return (
    <div className="w-full">
      <label>
        {title}
        <span className="text-red-500">*</span>
      </label>
      <input
        name={name}
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
      />
      {errors.length > 0 && (<p className="text-red-500">{errors}</p>)}
    </div>
  );
};

export default FormInput;
