import { CheckCircledIcon  } from "@radix-ui/react-icons";


import React from 'react'

interface FormErrorProps {
    message?: string;
};

const FormSuccess = ({
    message,
}:FormErrorProps) => {
    if (!message) return null;

  return (
    <div>
      <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-emerald-500">
        <CheckCircledIcon className="h-4 w-4"/>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default FormSuccess
