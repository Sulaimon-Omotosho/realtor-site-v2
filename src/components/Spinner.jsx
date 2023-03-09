import React from 'react'
import spinner from '../Assets/svg/spinner.svg'

export default function Spinner() {
  return (
    <div class='bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50'>
      <div>
        <img src={spinner} alt='Loading' class='h-24' />
      </div>
    </div>
  )
}
