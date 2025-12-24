import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoursePage = () => {
    const { id } = useParams();
    const [courses, setCourses] = useState([]);
    const [openDescription, setOpenDescription] = useState(null);
    const [openSection, setOpenSection] = useState(null);

    useEffect(() => {
        fetchCourseDetail();
    }, [id]);

    const fetchCourseDetail = async() => {
        const response = await fetch(`http://localhost:3005/courses/${id}`)
        const result = await response.json();
        setCourses(result);
    }

    const toggleDescription = () => {
      setOpenDescription(!openDescription);
    }

    const toggleSection = () => {
      setOpenSection(!openSection);
    };

  return (
    <div className="container mx-auto md:px-12">
      <div className="py-6">
        <h1 className="flex justify-center text-2xl font-bold">{courses.name}</h1>
        <p className='flex justify-center py-4 text-sm text-secondary'>{courses.category}</p>
        <div className="flex justify-center">
          <img 
            src={courses.image} 
            alt="{courses.name}" 
            className="flex justify-center"
          />
        </div>
      </div>


{/* toggle : description */}
      <div className="my-6 hover:cursor-pointer border border-secondary rounded-lg">
        <div 
          onClick={toggleDescription}
          className="flex justify-between items-center p-4 rounded-lg hover:border-text hover:border-2"
        >
          <h2 className="items-center text-xl font-bold">Description</h2>
          <span className={`transition-transform duration-300 ${
            openDescription ? "rotate-180" : ""
          }`}>▼</span>

        </div>
          {openDescription && (
            <div className="p-4 pb-4 text-sm text-text">
              {courses.description}
            </div>
          )}
      </div>

{/* toggle : Course Contents */}
      <div className=" hover:cursor-pointer border border-secondary rounded-lg">
        <div 
          onClick={toggleSection}
          className="flex justify-between items-center p-4 rounded-lg hover:border-text hover:border-2"
        >
          <h2 className="items-center text-xl font-bold">Course Contents</h2>
          <span className={`transition-transform duration-300 ${
            openSection ? "rotate-180" : ""
          }`}>▼</span>

        </div>
          {openSection && (
            <div className="p-4 pb-4 text-sm text-text">
              {courses.coursesDtl?.map((item,index) => (
                <div key={item.id} className="flex justify-between items-center p-4">
                  <h3 className="text-lg font-medium">Section {index+1}</h3>
                  <h3 className="text-lg">{item.title}</h3>
                  <h3 className="text-lg text-secondary">{item.duration}</h3>
                </div>
              ))}
            </div>
          )}
      </div>




      

      {/* <div>
        <h2 className="p-4 text-xl font-bold">Course Contents</h2>

        {courses.coursesDtl?.map((item, index) => (
          <div key={item.id} className="border-b">

            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleSection(index)}
            >
              <h3 className="text-lg font-medium">
                Section {index + 1}: {item.title}
              </h3>

              <span className="text-secondary">
                {openSection === index ? "▲" : "▼"}
              </span>
            </div>

            {openSection === index && (
              <div className="px-6 pb-4 text-sm text-gray-600">
                <p>Duration: {item.duration}</p>
              </div>
            )}

          </div>
        ))}
      </div>   */}

     
    </div>
  )
}

export default CoursePage