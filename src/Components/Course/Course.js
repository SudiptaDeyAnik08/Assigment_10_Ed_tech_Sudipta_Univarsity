import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleCourse from '../SingleCourse/SingleCourse';

function Course() {
  const data = useLoaderData();
  console.log(data)
  // const a = fetch('https://assigment-10-ed-tech-server-qfxsk3ss8.vercel.app/course')
//  console.log(a)
  return (

    <div>
      {
        data.map(res => <SingleCourse key={res.id} data ={res}></SingleCourse>)
      }
    </div>
  )
}

export default Course