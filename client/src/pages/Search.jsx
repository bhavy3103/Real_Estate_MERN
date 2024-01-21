import React from 'react'

const Search = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className="p-5 border-b-2 md:border-r-2 md:min-h-screen">
        <form className='flex flex-col gap-7' >
          <div className="flex items-center gap-2">
            <label className='whitespace-nowrap font-semibold'>Search Term:</label>
            <input type="text"
              id='searchTerm'
              placeholder='Search...'
              className='border rounded-lg p-3 w-full'
            />
          </div>
          <div className="flex flex-wrap items-center gap-2" >
            <label className='font-semibold'>Type:</label>
            <div className="flex">
              <input type="checkbox" id="all" className='w-5' />
              <span className='ml-1'>Rent & Sale</span>
            </div>
            <div className="flex">
              <input type="checkbox" id="rent" className='w-5' />
              <span className='ml-1'>Rent</span>
            </div>
            <div className="flex">
              <input type="checkbox" id="sale" className='w-5' />
              <span className='ml-1'>Sale</span>
            </div>
            <div className="flex">
              <input type="checkbox" id="offer" className='w-5' />
              <span className='ml-1'>offer</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2" >
            <label className='font-semibold'>Amenities:</label>
            <div className="flex">
              <input type="checkbox" id="parking" className='w-5' />
              <span className='ml-1'>Parking</span>
            </div>
            <div className="flex">
              <input type="checkbox" id="furnished" className='w-5' />
              <span className='ml-1'>furnished</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className='font-semibold'>Sort:</label>
            <select id="sort_order" className='border rounded-lg p-2'>
              <option>Price high to low</option>
              <option>Price low to high</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95' >Search</button>
        </form>
      </div>
      <div className="">
        <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>Listing Results</h1>
      </div>
    </div>
  )
}

export default Search
