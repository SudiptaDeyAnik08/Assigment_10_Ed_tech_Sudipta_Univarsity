import React from 'react'
import './SingleCourse.css';


function SingleCourse({ data }) {
  console.log(data);
  const { id, title, details, image_url, price } = data;
  return (
    <div>

      <div className='flex'>
        <p className='font-extrabold	 text-3xl	'>{title}</p>
        <div>
          <p>{details}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleCourse