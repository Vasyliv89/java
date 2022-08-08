
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calculator(a,b) {
//   let res=a*b;
//   return res
// }
// let x= calculator(15,22);
// console.log(x)





// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let pi =3.14
// function foo(pi,r) {
//
//   return pi * r * r;
// }
//
// console.log(foo(pi,10));
//
//
//


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

//
// function foo(h,r){
//   return 2 * 3.14 * r*(h+ r)
// }
//
// console.log(foo(2,5));
//


// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1,2,3,4];
// function  foo(arr){
//   console.log(arr)
// }
// foo(array)
//

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function ulito(text) {
//     document.write(`<p> ${text} </p>`)
//   }
// ulito(`hey-hey `)
//
//


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

// function ulito(text,adli) {
//   for (i=0;i<adli;i++) {
//     document.write(`<ul><li> ${text} </li></ul>`)
//
//   }
// }
// ulito(`heyhey `, 3)






// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulito(text,adli) {
//   for (i=0;i<adli;i++) {
//     document.write(`<ul><li> ${text} </li></ul>`)}
//   if (ulito[0])>
// }
// ulito(`heyhey `, 5)





// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
//
//
// let  array=[1,`hello`,true];
// function foo(arr){
//   document.write(`<ul>`)
//   for (const arrElement of arr) {
//     document.write(`<li>${arrElement}</li>`)
//     document.write(`</ul>`)
//
//   }
// }
// foo(array)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//   {name: 'vasya', age: 31, id : 0},
//   {name: 'petya', age: 30, id: 1},
//   {name: 'kolya', age: 29, id: 2},
//   {name: 'olya', age: 28, id: 3},
// ];
// function pipleid(user) {
//   for (const userElement of user) {
//     document.write(`<div>--${userElement.name}--${userElement.age}--${userElement.id}</div>`)
//   }{
//    document.write(`<div>${name}</div>`)
//   }
//
//
// }
// pipleid(users)


// - створити функцію яка повертає найменьше число з масиву

// let arraynumber=[39,45,25,78,369,1258,21,45]
// function bulevi(arr) {
//   let min = arr[0];
//   for (const minElement of arr) {
//     if (minElement < min) {
//       min = minElement;
//     }
//   }
//   return min
//   }
// console.log(bulevi(arraynumber))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// let array = [1,2,3,4,5]
// function foo(arr){
//   let sum=0;
//   for (const arrElement of arr) {
//     sum += arrElement;
//   }
//   return sum
// }
// console.log(foo(array))
