
const Header = () => {
    return (
        <header className="header">
            <div className="container header__inner">
                <div className="logo">
                    Code<span>Camp</span>
                </div>
                <nav className="nav">
                    <a href="#" className="nav__link">Курсы</a>
                    <a href="#" className="nav__link">Преподаватели</a>
                    <a href="#" className="nav__link">Отзывы</a>
                    <a href="#" className="nav__link">Контакты</a>
                </nav>
                <button className="btn btn--outline">Войти</button>
            </div>
        </header>
    )
}

export default Header

