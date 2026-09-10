import courses from '../assets/courses.json'
import CourseCard from './CourseCard'

const CourseList = () => {
  return (
    <section className="courses">
      <div className="container">
        <h2 className="section-title">Наши курсы</h2>
        <div className="courses__grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseList