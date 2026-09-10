const Testimonials = () =>
{
    return (
        <section className="testimonials">
  <div className="container">
    <h2 className="section-title">Отзывы студентов</h2>
    <div className="testimonials__grid">
      <div className="review-card">
        <img
          className="review-card__avatar"
          src="https://placehold.co/64x64?text=A"
          alt="Анна"
        />
        <div className="review-card__content">
          <p className="review-card__text">
            Курс по React дал мне уверенные знания, через 2 месяца после выпуска
            нашла работу.
          </p>
          <span className="review-card__author">
            Анна К. — курс «React с нуля»
          </span>
        </div>
      </div>
      <div className="review-card">
        <img
          className="review-card__avatar"
          src="https://placehold.co/64x64?text=D"
          alt="Дмитрий"
        />
        <div className="review-card__content">
          <p className="review-card__text">
            Отличные менторы, всегда помогали с код-ревью. Рекомендую курс по
            Node.js.
          </p>
          <span className="review-card__author">
            Дмитрий С. — курс «Node.js для бэкенда»
          </span>
        </div>
      </div>
      <div className="review-card">
        <img
          className="review-card__avatar"
          src="https://placehold.co/64x64?text=M"
          alt="Мария"
        />
        <div className="review-card__content">
          <p className="review-card__text">
            Была без опыта в дизайне, а теперь собираю портфолио и беру первые
            заказы.
          </p>
          <span className="review-card__author">
            Мария П. — курс «UX/UI дизайн»
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
export default Testimonials