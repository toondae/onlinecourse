// import React from 'react'

import { Link } from "react-router-dom"

// const CourseCard = ({course}) => {
//   return (
//     <div className='h-full'>
//         <div className='flex flex-col gap-4 pt-4'>
//            {course.map((courses) => (
//               <div className='p-4 border border-white-600 rounded-lg  hover:bg-gray-500 bg-opacity-50 cursor-pointer'>
//                 <div key={courses.id} className='flex items-center justify-between'>
//                   <h2 className='text-lg font-bold'>{courses.name}</h2>
//                   <p className='text-sm text-gray-300'>{courses.category}</p>
//                 </div>
//                 <p className='pt-4 text-ml'>{courses.description}</p>
//               </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default CourseCard



const CourseCard = ({course}) => {
  return (
    <Link to={`courses/${course.id}`}>
      <div className='container mx-auto '>
          <div className='flex flex-col gap-4 pt-4'>   
            <div className='p-6 border border-secondary rounded-lg  hover:bg-gray-100 bg-opacity-50 cursor-pointer'>
              <div className='sm:flex gap-2 items-center justify-between'>
                <h3 className='text-lg font-bold text-text'>{course.name}</h3>
                <p className='text-sm text-secondary'>{course.category}</p>
              </div>
              <p className='pt-4 text-ml text-text'>{course.description}</p>
            </div>
          </div>
      </div>
    </Link>
  )
}

export default CourseCard