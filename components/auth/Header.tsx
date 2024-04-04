"use client"

import React from 'react'

interface HeaderProps{
    label : string;
};


export const Header = ({
    label,
}: HeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
        <h1 className="">
            AUTH
        </h1>
        <p className='text-sm'>
            {label}
        </p>
    </div>
  )
}

