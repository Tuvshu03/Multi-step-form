import React from 'react'

const FinishedForm = (props) => {
  const {handleBackStep} = props
  return (
    <button
        className="w-full bg-black text-white border rounded-md p-2"
        onClick={handleBackStep}
      >
        back
      </button>
  )
}

export default FinishedForm