import React from 'react'

const Title = ({heading}:{heading:any}) => {
  return (
    <div className="group cursor-pointer ">
      <h1 className='text-3xl font-bold group-hover:text-orange-400 transition-all'>
        {heading}
      </h1>
      <div className='w-40 h-2 bg-orange-500 rounded-full'></div>
      <div className='w-40 h-2 bg-white rounded-full translate-x-2'></div>
    </div>
  )
}

export default Title