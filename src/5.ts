// Partial<T>

// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити.Створіть тип для такої форми на основі існуючого типу User.
type User = {
    name: string;
    age: number;
    email: string;
}

type FormForChange = Partial<User>;

const formUser: FormForChange={
    age: 25,
}

//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.
interface Config  {
    title: string,
    author: string,
    year: number,

}

function changeConfig( partial:Partial<Config>): Config{
    return {  
        title: partial.title || "Rembo",
        author: partial.author || "Stalone",
       year: partial.year || 1982,
     };
}

const config2 = changeConfig( { year: 1984 });



// Readonly<T>

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
//   але ви хочете гарантувати, що функція не змінює вхідний масив.

function noChange(arrayNumber: ReadonlyArray <number>): number[] {
  return Array.from(arrayNumber);
};

// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.
interface ConfigObject {
    name: string,
        age: number,
           hobby: string,

}

const userNoChange: Readonly<ConfigObject> = {
  name: "John",
  age: 30,
  hobby: "Reading",
};

// 3. Pick<T, K>

// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.
interface UserClass{
    name: string,
    email: string,
    age: number,

}

function userWithNameandEmail(user: UserClass): Pick<UserClass, "name" | "email"> {
    return {
        name: user.name,
        email: user.email,
    }
}
// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.

// 4. Record<K, T>

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.
// Задача 2: Мапа з іменами місяців до кількості днів у них.

// 5. Omit<T, K>

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.
//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.

// Робота з інтерфейсами

// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.

// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

// Робота з класами

// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(), що виводить інформацію про автомобіль.

// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється.