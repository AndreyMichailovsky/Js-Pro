//ToDo - вам необходимо скопировать данный скрипт в свой проект, и сдавать ДЗ в рамках собственного репозитория


// 1) Какие виды областей видимости вы знаете? Написать ответ ниже
/* 1. Глобальные 
   2. Локальные
   3. Блочные
   4. Области видимости try catch
*/


// 2) Исправьте код так чтобы в консоль выводились числа от 0 до 10
for (var i = 0; i <= 10; i++) {
    console.log(i);
}

// 3) Исправьте код так чтобы в консоль выводилось "John"
var firstName = "Elena"
const obj = {
    firstName: 'John',
    sayFirstName: () => {
        console.log(obj.firstName)
    }
}
obj.sayFirstName();



// 4) Исправьте код так чтобы в консоль не выводилась ошибка (нельзя исправлять тело функции getArrowFunction)
const user = {
    age: 20
}

function getArrowFunction() {
    "use strict"
    return () => {
        console.log(this.age)
    }
}

const arrowFunction = getArrowFunction.call(user);
arrowFunction();