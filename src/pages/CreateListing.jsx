import React, { useState } from 'react'

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: '1',
    bathrooms: '1',
    parking: false,
    furnished: false,
    address: '',
    description: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
  })
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData
  function onChange() {}
  return (
    <main class='max-w-md px-2 mx-auto'>
      <h1 class='text-3xl text-center mt-6 font-bold'>Property Credentials</h1>
      <form>
        <p class='text-lg mt-6 font-semibold'>Sell / Rent</p>
        <div className='flex'>
          <button
            class={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === 'rent'
                ? 'bg-white text-black'
                : 'bg-slate-600 text-white'
            }`}
            type='button'
            id='type'
            value='sale'
            onClick={onChange}
          >
            Sell
          </button>
          <button
            class={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === 'sale'
                ? 'bg-white text-black'
                : 'bg-slate-600 text-white'
            }`}
            type='button'
            id='type'
            value='sale'
            onClick={onChange}
          >
            rent
          </button>
        </div>
        <p class='text-lg mt-6 font-semibold'>Name</p>
        <input
          type='text'
          id='name'
          value={name}
          placeholder='Name'
          maxLength='32'
          minLength='10'
          required
          onChange={onChange}
          class='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'
        />
        <div className='flex space-x-6 mb-6'>
          <div>
            <p class='text-lg font-semibold'>Beds</p>
            <input
              type='number'
              name=''
              id='bedrooms'
              value={bedrooms}
              min='1'
              max='50'
              required
              class='w-full px-4 py-2 text-xl text-gray-500 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
              onChange={onChange}
            />
          </div>
          <div>
            <p class='text-lg font-semibold'>Baths</p>
            <input
              type='number'
              name=''
              id='bathrooms'
              value={bathrooms}
              min='1'
              max='50'
              required
              class='w-full px-4 py-2 text-xl text-gray-500 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
              onChange={onChange}
            />
          </div>
        </div>
        <p class='text-lg mt-6 font-semibold'>Parking space</p>
        <div className='flex'>
          <button
            class={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
            type='button'
            id='parking'
            value={true}
            onClick={onChange}
          >
            Yes
          </button>
          <button
            class={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
            type='button'
            id='parking'
            value={false}
            onClick={onChange}
          >
            no
          </button>
        </div>
        <p class='text-lg mt-6 font-semibold'>Furnished</p>
        <div className='flex'>
          <button
            class={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
            type='button'
            id='furnished'
            value={true}
            onClick={onChange}
          >
            yes
          </button>
          <button
            class={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
            type='button'
            id='furnished'
            value={false}
            onClick={onChange}
          >
            no
          </button>
        </div>
        <p class='text-lg mt-6 font-semibold'>Address</p>
        <textarea
          type='text'
          id='address'
          value={address}
          placeholder='Address'
          required
          onChange={onChange}
          class='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'
        />
        <p class='text-lg font-semibold'>Description</p>
        <textarea
          type='text'
          id='description'
          value={description}
          placeholder='Description'
          required
          onChange={onChange}
          class='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'
        />
        <p class='text-lg font-semibold'>Sell / Rent</p>
        <div className='flex mb-6'>
          <button
            class={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
            type='button'
            id='offer'
            value={true}
            onClick={onChange}
          >
            Yes
          </button>
          <button
            class={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
            type='button'
            id='offer'
            value={false}
            onClick={onChange}
          >
            no
          </button>
        </div>
        <div className='flex items-center mb-6'>
          <div className=''>
            <p class='text-lg font-semibold'>Regular price</p>
            <div className='flex justify-center items-center space-x-6'>
              <input
                class='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                type='number'
                id='regularPrice'
                value={regularPrice}
                onChange={onChange}
                min='50'
                max='400000000'
                required
              />
              {type === 'rent' && (
                <div className=''>
                  <p class='text-md w-full whitespace-nowrap'>$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className='flex items-center mb-6'>
            <div className=''>
              <p class='text-lg font-semibold'>Discounted price</p>
              <div className='flex justify-center items-center space-x-6'>
                <input
                  class='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                  type='number'
                  id='discountedPrice'
                  value={discountedPrice}
                  onChange={onChange}
                  min='50'
                  max='400000000'
                  required={offer}
                />
                {type === 'rent' && (
                  <div className=''>
                    <p class='text-md w-full whitespace-nowrap'>$ / Month</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className='mb-6'>
          <p class='text-lg font-semibold '>Images</p>
          <p lass='text-gray-600'>first image is cover (max 6)</p>
          <input
            class='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600'
            type='file'
            id='images'
            onChange={onChange}
            accept='.jpg,.png,.jpeg'
            multiple
            required
          />
        </div>
        <button
          type='submit'
          class='mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        >
          Send Details
        </button>
      </form>
    </main>
  )
}
