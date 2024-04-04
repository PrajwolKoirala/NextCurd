import { ExclamationTriangleIcon  } from "@radix-ui/react-icons";


import React from 'react'

interface FormErrorProps {
    message?: string;
};

const FormError = ({
    message,
}:FormErrorProps) => {
    if (!message) return null;

  return (
    <div>
      <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-destrucive">
        <ExclamationTriangleIcon className="h-4 w-4"/>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default FormError
