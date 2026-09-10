# Лабораторная работа — React

## Цель работы

Разбить страницу на компоненты и переписать на React.

## Входные файлы

Вам выдаётся готовый статический сайт-каталог онлайн-курсов «CodeCamp»:

| Файл           | Назначение                                                |
| -------------- | --------------------------------------------------------- |
| `index.html`   | Вся вёрстка страницы одним файлом                         |
| `style.css`    | Стили ко всей странице                                    |
| `courses.json` | Данные о курсах (используются в разделе «Наши курсы»)     |
| `reviews.json` | Данные об отзывах (используются в дополнительном задании) |

## Минимально ожидаемое дерево компонентов

*Это структура приложения, а не проекта. Каждый отдельный компонент — отдельный файл в папке `components`.*

```text
App
 ├─ Header
 ├─ Hero
 ├─ CourseList
 │    └─ CourseCard
 ├─ TestimonialList
 │    └─ ReviewCard
 └─ Footer
```

---

# Часть 2. Настройка проекта

1. Создайте новое React-приложение используя [Vite](https://vite.dev/).

Содержимое JSON представьте JavaScript-объектами внутри компонентов-контейнеров.

---

# Требования к оформлению кода

* Имя компонента и имя файла совпадают и начинаются с заглавной буквы.
* Каждый компонент — отдельный файл, экспортируется по умолчанию (`export default`).
* Внутри компонентов, принимающих пропсы, используется деструктуризация в параметрах функции, а не обращение через `props.что-то`.
* Захардкоженных данных о курсах/отзывах в JSX быть не должно — только подставление props'ов сверху на место контента.
* Для повторяющихся элементов используются массивы данных и метод `map()`, а не ручное дублирование JSX.
* У каждого элемента, созданного через `map()`, есть `key`.
* В данной лабораторной работе `key` строится на основе индекса массива.
* Данные могут передаваться в компонент как отдельными пропсами, так и целым объектом через spread-оператор.

---

# Как сдавать

* Создайте форк репозитория в вашей организации с названием `название-этого-репозитория-вашафамилия`.
* Используя ветку `wip`, сделайте задание.
* Зафиксируйте изменения в вашем репозитории.
* Когда документ будет готов — создайте пул реквест из ветки `wip` (вашей) на ветку `main` (тоже вашу) и укажите меня (`ktkv419`) как reviewer.

---

# Памятка

## 0. React

Проект инициализируется через Vite:

```bash
npm create vite@latest
```

Сервер запускается командой:

```bash
npm run dev
```

Зависимости устанавливаются командой:

```bash
npm install
```

---

## 1. Создание компонентов

**Компонент** — это переиспользуемая часть интерфейса. В React компонент обычно представляет собой JavaScript-функцию, которая возвращает JSX.

Например, компонент карточки курса:

```jsx
function CourseCard() {
  return (
    <div className="course-card">
      <h3>React с нуля</h3>
      <span>15000 ₽</span>
    </div>
  );
}

export default CourseCard;
```

Компонент рекомендуется хранить в отдельном файле с таким же именем:

```text
components/
├─ CourseCard.jsx
├─ CourseList.jsx
└─ Header.jsx
```

Имя компонента и имя файла начинаются с заглавной буквы.

### Экспорт компонента

Для того чтобы использовать компонент в другом файле, его нужно экспортировать:

```jsx
export default CourseCard;
```

Или сразу при объявлении:

```jsx
export default function CourseCard() {
  return <div>Карточка курса</div>;
}
```

### Импорт компонента

В другом файле компонент импортируется:

```jsx
import CourseCard from "./components/CourseCard";
```

После этого его можно использовать как JSX-тег:

```jsx
function App() {
  return (
    <main>
      <CourseCard />
    </main>
  );
}

export default App;
```

Таким образом, связь между компонентами выглядит так:

```text
App
 └─ CourseList
      └─ CourseCard
```

`App` использует `CourseList`, а `CourseList` использует `CourseCard`.

---

## 2. Что такое пропсы

**Props** (properties, свойства) — это способ передать данные из родительского компонента в дочерний.

Пропсы работают только **сверху вниз** (от родителя к потомку) и являются **неизменяемыми** (read-only) внутри дочернего компонента — менять `props` напрямую нельзя.

```jsx
// Родитель передаёт пропсы дочернему компоненту через атрибуты, как в HTML
<CourseCard title="React с нуля" price={15000} />
```

В этом примере `title` и `price` являются пропсами компонента `CourseCard`.

---

## 3. Приём пропсов в компоненте

Функциональный компонент получает пропсы одним объектом первым аргументом.

Можно обратиться к значениям через `props`:

```jsx
function CourseCard(props) {
  return <h3>{props.title}</h3>;
}
```

Но в этой лабораторной работе используется **деструктуризация в параметрах функции**:

```jsx
function CourseCard({ title, price }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <span>{price} ₽</span>
    </div>
  );
}
```

Такой вариант является предпочтительным для этой работы.

---

## 4. Передача разных типов данных

Строки можно передавать без фигурных скобок, остальные JavaScript-значения передаются через `{}`:

```jsx
<CourseCard
  title="Python для анализа данных"
  price={20000}
  rating={4.9}
  isPopular={true}
  tags={["backend", "python"]}
  onEnroll={() => console.log("go")}
/>
```

Здесь:

* `title` — строка;
* `price` — число;
* `rating` — число;
* `isPopular` — boolean;
* `tags` — массив;
* `onEnroll` — функция.

---

## 5. Передача объекта целиком

Если данные уже лежат объектом (например, один элемент массива из JSON), удобно передать объект одним пропом:

```jsx
const course = {
  id: 1,
  title: "React с нуля",
  price: 15000
};

<CourseCard course={course} />
```

Внутри компонента можно получить значения из объекта:

```jsx
function CourseCard({ course }) {
  const { title, price } = course;

  return (
    <h3>
      {title} — {price} ₽
    </h3>
  );
}
```

---

## 6. Spread-оператор при передаче пропсов

Если объект уже содержит все необходимые поля для компонента, необязательно передавать каждое поле отдельно.

Можно использовать **spread-оператор (`...`)**:

```jsx
const course = {
  title: "React с нуля",
  price: 15000,
  rating: 4.9
};

<CourseCard {...course} />
```

Это аналогично:

```jsx
<CourseCard
  title={course.title}
  price={course.price}
  rating={course.rating}
/>
```

Компонент при этом получает обычные пропсы:

```jsx
function CourseCard({ title, price, rating }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{price} ₽</p>
      <span>Рейтинг: {rating}</span>
    </div>
  );
}
```

### Когда использовать spread

Spread удобно использовать, когда структура объекта совпадает со структурой пропсов компонента:

```jsx
const course = {
  title: "React с нуля",
  price: 15000
};

<CourseCard {...course} />
```

Не следует использовать spread без необходимости. Если компоненту нужно передать только несколько конкретных значений, можно передать их явно:

```jsx
<CourseCard
  title={course.title}
  price={course.price}
/>
```

---

## 7. Отрисовка массива через `map()`

В React часто нужно вывести несколько одинаковых элементов: карточки курсов, отзывы, товары и т. д.

Для этого используется метод массива `map()`.

Например, есть массив курсов:

```jsx
const courses = [
  {
    title: "React с нуля",
    price: 15000
  },
  {
    title: "Python для начинающих",
    price: 12000
  },
  {
    title: "JavaScript Advanced",
    price: 18000
  }
];
```

Вместо того чтобы вручную писать три компонента:

```jsx
<CourseCard {...courses[0]} />
<CourseCard {...courses[1]} />
<CourseCard {...courses[2]} />
```

используйте `map()`:

```jsx
function CourseList() {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          {...course}
        />
      ))}
    </div>
  );
}
```

`map()` проходит по каждому элементу массива и возвращает JSX для каждого элемента.

Получается:

```text
courses
   │
   ├── course 1 ──> CourseCard
   ├── course 2 ──> CourseCard
   └── course 3 ──> CourseCard
```

Это позволяет не дублировать одинаковую HTML-разметку.

---

## 8. `key` при отрисовке списка

При создании списка через `map()` React необходимо сообщить, какой элемент списка является каким.

Для этого используется специальный проп `key`:

```jsx
{courses.map((course, index) => (
  <CourseCard
    key={index}
    {...course}
  />
))}
```

В этой лабораторной работе `key` строится на основе индекса массива:

```jsx
key={index}
```

Важно: `key` нужен именно React для отслеживания элементов списка и **не передаётся в компонент как обычный проп**.

Например:

```jsx
<CourseCard
  key={index}
  title={course.title}
/>
```

Внутри `CourseCard` нельзя получить `key` через:

```jsx
function CourseCard({ key }) {
  // так делать не нужно
}
```

Если компоненту нужен индекс как обычное значение, его необходимо передать отдельным пропом:

```jsx
<CourseCard
  key={index}
  index={index}
/>
```

---

## 9. `map()` + props + spread

Наиболее важный для этой лабораторной работы вариант — совместное использование `map()`, `key`, props и spread-оператора.

Например:

```jsx
const courses = [
  {
    title: "React с нуля",
    price: 15000,
    rating: 4.9
  },
  {
    title: "JavaScript Advanced",
    price: 18000,
    rating: 4.8
  }
];

function CourseList() {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          {...course}
        />
      ))}
    </div>
  );
}
```

Здесь происходит сразу несколько действий:

1. `map()` перебирает массив `courses`.
2. `course` содержит текущий объект курса.
3. `index` содержит его индекс.
4. `key={index}` задаёт ключ элемента списка.
5. `{...course}` передаёт свойства объекта в `CourseCard` как отдельные пропсы.

В результате:

```jsx
<CourseCard
  key={0}
  title="React с нуля"
  price={15000}
  rating={4.9}
/>
```

и:

```jsx
<CourseCard
  key={1}
  title="JavaScript Advanced"
  price={18000}
  rating={4.8}
/>
```

---

## 10. Контейнерный и отображающий компоненты

В этой лабораторной работе удобно разделять ответственность между компонентами.

Например, `CourseList` отвечает за данные и перебор массива:

```jsx
function CourseList() {
  const courses = [
    {
      title: "React с нуля",
      price: 15000
    },
    {
      title: "JavaScript Advanced",
      price: 18000
    }
  ];

  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
}
```

А `CourseCard` отвечает только за отображение одной карточки:

```jsx
function CourseCard({ title, price }) {
  return (
    <article className="course-card">
      <h3>{title}</h3>
      <p>{price} ₽</p>
    </article>
  );
}
```

Таким образом:

* `CourseList` знает о массиве курсов;
* `CourseList` использует `map()`;
* `CourseList` передаёт данные через props;
* `CourseCard` не знает, откуда пришли данные;
* `CourseCard` просто отображает полученные props.

Это позволяет переиспользовать `CourseCard` с любыми подходящими данными.

---

## 11. Пример структуры компонентов

Один из возможных вариантов структуры проекта:

```text
src/
├─ components/
│  ├─ Header.jsx
│  ├─ Hero.jsx
│  ├─ CourseList.jsx
│  ├─ CourseCard.jsx
│  ├─ TestimonialList.jsx
│  ├─ ReviewCard.jsx
│  └─ Footer.jsx
│
├─ App.jsx
├─ main.jsx
└─ style.css
```

`App.jsx` собирает страницу из компонентов:

```jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseList from "./components/CourseList";
import TestimonialList from "./components/TestimonialList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CourseList />
      <TestimonialList />
      <Footer />
    </>
  );
}

export default App;
```

В результате отдельные части страницы находятся в отдельных компонентах, а `App` отвечает за их объединение.
