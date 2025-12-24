import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'

// ทำเว็บคอร์สออนไลน์ มีลิ้ง API ด้วย react js , Tailwind ให้มีแถบเลือกแสดงตาม category ได้ด้วย

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    fetchCourse()
  },[])

  const fetchCourse = async () => {
    
    const response = await fetch('http://localhost:3005/courses')
    const data = await response.json()

    setCourses(data)
    setFiltered(data)
    console.log(data)
  }

  const handleFilter = (category) => {
    if(category === 'All') {
      setFiltered(courses)
    }else{
      setFiltered(courses.filter(course => course.category === category))
    }
  }


  const categories = ['All', ...new Set(courses.map(course => course.category))]
  
    
  return (
    <div className='container mx-auto p-4 md:px-12'>
      <div className='py-6 flex justify-between gap-2 items-center'>
        <div className=''>
          <h1 className='text-2xl font-bold text-text'>Course</h1>
        </div>

        <div className='hidden md:flex gap-4 items-center justify-center text-lg'>
          {categories.map( (cat, index) => (
            <h3 className='px-2 text-text px-1  hover:cursor-pointer hover:border border-secondary rounded-lg' key={index} onClick={()=>handleFilter(cat)}>{cat}</h3>
          ))}
          
        </div>
        <div className=' md:hidden flex gap-4 text-lg text-text border border-secondary rounded-lg px-1 py-1'>
          <select name="catagory" id="" onChange={(e) => handleFilter(e.target.value)} value={category}  className='cursor-pointer'>
              {categories.map( (cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
          </select>
        </div>
      </div>
      
      <div>
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default CourseList