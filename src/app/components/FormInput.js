import React from 'react'

const FormInput = ({
  placeholder,
  type = "text",
  onChange,
  name = "",
  value,
  
  }
) => {
  return (
    <div>
           <label>
            First name
            <span className="text-red-500">*</span>
          </label>
          <input 
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`mt-1 block w-full px-3 py-2 rounded-md border-gray-300 focus:outline-blue-500 text-black`}
          />
    </div>
  )
}

export default FormInput