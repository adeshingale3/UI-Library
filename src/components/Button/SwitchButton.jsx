import React, { useState } from 'react'

const SwitchButton = () => {
    const [enabled, setEnabled] = useState(false);
  return (

    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        enabled ? 'bg-purple-500 border-2 border-purple-500' : 'bg-black border-2 border-purple-500'
      }`}
      onClick={() => setEnabled(!enabled)}
    >
      <div
        className={`bg-purple-500 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          enabled ? 'translate-x-5 bg-white' : 'translate-x-0'
        }`}
      />
    </div>
  )
}

export default SwitchButton