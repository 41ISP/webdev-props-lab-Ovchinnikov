import courses from '../assets/courses.json'

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <h2 className="section-title">Наши курсы</h2>
        <div className="courses__grid">
          {courses.map((course) => (
            <article className="course-card" key={course.id}>
              <img
                className="course-card__image"
                src={course.image}
                alt={course.title}
              />
              <div className="course-card__body">
                <span className="course-card__category">{course.category}</span>
                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__meta">
                  {course.duration} · {course.level}
                </p>
                <div className="course-card__footer">
                  <span className="course-card__price">
                    {course.price.toLocaleString('ru-RU')} ₽
                  </span>
                  <span className="course-card__rating">★ {course.rating}</span>
                </div>
                <button className="btn btn--primary btn--full">
                  Записаться
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses