// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function user (id,name,email,surname,phone){
//   this.id = id;
//   this.name = name;
//   this.email = email;
//   this.surname = surname;
//   this.phone = phone;
// }
// let array=[];
// let xxx = new user (`12`,`petro`,`karabas`,`likar`,`456879321`);
// let xxx1 = new user(63,`masha`,`mamashka@ukr.net`,`mamashka`,45617988);
// let xxx2 = new user(45,`denis`,`deredenis@ukr.net`,`deredenis`,45612444);
// let xxx3 = new user(44,`volodia`,`vova@ukr.net`,`vova`,456123218);
// let xxx4 = new user(43,`kolia`,`anakoliy@ukr.net`,`anakoliy`,456123258);
// let xxx5 = new user(49,`vasia`,`vasiliy@ukr.net`,`vasiliy`,456137898);
// let xxx6 = new user(47,`ivan`,`baraban@ukr.net`,`baraban`,45612789);
// let xxx7 = new user(42,`oleh`,`vinuk@ukr.net`,`vinuk`,45612258);
// let xxx8 = new user(41,`andrey`,`duda@ukr.net`,`duda`,45645678);
// let xxx9 = new user(40,`lilia`,`na3kila@ukr.net`,`na3kila`,4561256);
//
//
// array.push(xxx,xxx2,xxx3,xxx4,xxx5,xxx6,xxx7,xxx8,xxx9)

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
// let filter = array.filter(value => value.id % 2 === 0);
// console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = array.sort((a,b) =>a.id - b.id)
// console.log(sort)


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (
// поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
//
// class user{
//   constructor(id,name,email,surname,phone,order) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//     this.surname = surname;
//     this.phone = phone;
//     this.order = order;
//   }
// }
// let array=[];
// let xxx = new user (`12`,`petro`,`karabas`,`likar`,456879321,[4568]);
// let xxx1 = new user(63,`masha`,`mamashka@ukr.net`,`mamashka`,45617988,[6546]);
// let xxx2 = new user(45,`denis`,`deredenis@ukr.net`,`deredenis`,45612444,[8979]);
// let xxx3 = new user(44,`volodia`,`vova@ukr.net`,`vova`,456123218,[6589]);
// let xxx4 = new user(43,`kolia`,`anakoliy@ukr.net`,`anakoliy`,456123258,[8974]);
// let xxx5 = new user(49,`vasia`,`vasiliy@ukr.net`,`vasiliy`,456137898,[1236]);
// let xxx6 = new user(47,`ivan`,`baraban@ukr.net`,`baraban`,45612789,[6547]);
// let xxx7 = new user(42,`oleh`,`vinuk@ukr.net`,`vinuk`,45612258,[2587]);
// let xxx8 = new user(41,`andrey`,`duda@ukr.net`,`duda`,45645678,[6987]);
// let xxx9 = new user(40,`lilia`,`na3kila@ukr.net`,`na3kila`,4561256,[7823]);
//
// array.push(xxx,xxx2,xxx3,xxx4,xxx5,xxx6,xxx7,xxx8,xxx9)
//
// array.sort((a, b) => a.order.length - b.order.length);
// console.log(array)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model,producer,year,maxSpeed,engine){
//   this.model = model;
//   this.producer = producer;
//   this.year = year;
//   this.maxSpeed = maxSpeed;
//   this.engine = engine;
//
//   this.drive = function (){
//     console.log(`тачка іде ${this.maxSpeed} на годину`);
//   }
//
//   this.inf0 = function (){
//     for (const item in this) {
//          if (typeof this[item] !== `function`){
//            console.log(`${item} -- ${this[item]}`)
//          }
//     }
//   }
//   this.increaseMaxSpeed = function (newSpeed){
//     this.maxSpeed += newSpeed;
//   }
// this.addDriver = function (driver) {
//   this.driver = driver;
// }
//
// }
// let car = new Car( `kia`,`korea`,2000,200,2.6);
// console.log(car);
// car.drive();
// car.inf0()
// car.increaseMaxSpeed(50)
// console.log(car)
// car.addDriver( {name:"Alex" ,age:33})
// console.log(car)



//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//   constructor(model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//   }
//
//   drive() {
//     console.log(`тачка іде ${this.maxSpeed} на годину`);
//   }
//
//   inf0() {
//     for (const item in this) {
//       if (typeof this[item] !== `function`) {
//         console.log(`${item} -- ${this[item]}`)
//       }
//
//     }
//   }
//   increaseMaxSpeed(newSpeed){
//     this.maxSpeed = this.maxSpeed + newSpeed;
//   }
//   addDriver(driver){
//     this.driver = driver;
//   }
// }
//
// let car = new Car( `kia`,`korea`,2000,200,2.6);
// let objDriver = {
//   name:`petro`,
//   age:45
// }
// console.log(car);
// car.drive();
// car.inf0()
// car.increaseMaxSpeed(150)
// console.log(car)
// car.addDriver( {name:"vasia" ,age:33})
// console.log(car)
// car.addDriver(objDriver)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class cindirela{
    constructor(name,age,footsize){
      this.name = name;
      this.age = age;
      this.footsiza = footsize;
    }
}
let cindirela1 =  new cindirela(`kate`,33,37)
let cindirela2 =  new cindirela(`kate`,33,36)
let cindirela3 =  new cindirela(`kate`,33,35)
let cindirela4 =  new cindirela(`Ania`,22,34)
let cindirela5 =  new cindirela(`kate`,33,38)

let array = [cindirela1,cindirela2,cindirela3,cindirela4,cindirela5];

class Prince extends cindirela{
  constructor(name,age,findFootSize) {
    super(name,age);
    this.findFootSize = findFootSize
  }
}
let prince = new Prince(`Petr`,22,34);

let find = (array,prince)=> {
  for (const item of array) {
    if (prince.findFootSize === item.footsiza) {
      return `my Cinderella is${item.name}`
    }
  }
}
console.log(find(array,Prince))
