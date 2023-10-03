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
      author: partial.author || " David Morrell",
      year: partial.year || 1982,
    };
}

const config2 = changeConfig( { year: 1972 });



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
interface Answer{
    city: string,
    country: string,
    followers: number,

}

const answer1: Answer = {
    city: "Kremenchuk",
    country: "Ukraine",
    followers: 256,
}

function answerForDisply(answer: Answer): Pick<Answer, "city" | "followers"> {
    return {
        city: answer.city,
        followers: answer.followers,
    };
};

const answer2=answerForDisply(answer1);



// 4. Record<K, T>

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.
type UserNameAndAge = Record<string, number>;
const userName: UserNameAndAge = {
    Ann: 23,
    Bill: 32,
    Andrew: 33,
};


// Задача 2: Мапа з іменами місяців до кількості днів у них.

type MonthAndDay = Record<string, number>;

const monthandDay: MonthAndDay = {
    January: 31,
    Fabruary: 28,
    March: 31,
    April: 30,
    May: 31,
}

// 5. Omit<T, K>

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.
type UserDate = {
    name: string,
    email: string,
    password: string,
}

type UserDateWithaut = Omit<UserDate, "password">;


//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.

interface AnswerAPI{
    title: string,
    author: string,
    year: number,
    dateOfCreation: Date,
}

type AnswerAPINew = Omit<AnswerAPI, "dateOfCreation">;

const book: AnswerAPINew = {
    title: "Kobzar",
    author: "Shevchenko",
    year: 1990,
}

// Робота з інтерфейсами

// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.
enum Category{
    snack = "snack",
    mainCourse = "mainCourse",
    dessert="dessert",
   };

interface Menu{
    title: string,
    price: number,
    category:Category,
}

function filterForCategory(menu: Menu[], category:Category):Menu[] {
    return menu.filter(item => item.category === category);
}

const menuRestrant: Menu[] = [
    { title: "Burger", price: 80, category: Category.snack },
    { title: "Soup", price: 120, category: Category.mainCourse },
    { title: "Fondan", price: 150, category: Category.dessert },
];

const menuToSnack = filterForCategory(menuRestrant, Category.snack);
const menuToMainCorse = filterForCategory(menuRestrant, Category.mainCourse);
const menuToDessert = filterForCategory(menuRestrant, Category.dessert);


// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

interface UserBirthday{
    name: string,
    email: string,
    birthday: Date,
};

function userIsAdalt(user: UserBirthday): boolean{
   const adulthoodAgeMilliseconds = 18 * 365.25 * 24 * 60 * 60 * 1000; // 18 років в мілісекундах

   // Перевіряємо, чи користувач є повнолітнім (має 18 або більше років)
   return Date.now() - user.birthday.getTime() >= adulthoodAgeMilliseconds;
}

// Робота з класами

// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(), що виводить інформацію про автомобіль.
interface CarProperties{
    brand: string,
    year: number,
    fuelType: string,
}

class Car implements CarProperties {

    constructor(public brand: string, public year: number, public fuelType: string) {
        
  };
    getDetails(): void{
      console.log(`Brend: ${this.brand}, year: ${this.year}, Fuel type: ${this.fuelType}`);
  }
    
}
  
const oneCar = new Car("Hyundai", 2006, "Patrol");
oneCar.getDetails();
// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється.
interface StudentData{
    name: string,
    studentID: number,
    major:string,
}

class Student implements StudentData {
    constructor(public name: string, public studentID: number, public major: string){}

introduce(){
    console.log(`Hello! My name is ${this.name}. My student ID is ${this.studentID} and I study ${this.major}.`);
 }
}

const studentOne = new Student("Ann Push", 3455677, "Electronics");

studentOne.introduce();