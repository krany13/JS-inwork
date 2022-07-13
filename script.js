<<<<<<< HEAD
'use strict';
// ТЕОРИЯ
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }
}
const div = new ColoredRectangleWithText(25, 10, 'hhhhhh', 'red');
div.showMyProps();
console.log(div.calcArea());
const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());

=======
<<<<<<< HEAD
'use strict';
// 1)   ОБЫЧНАЯ ФУНКЦИЯ: THIS = WINDOW, НО ЕСЛИ ВКЛЮЧЕН 'use strict' - undefined
// ДАЖЕ ЕСЛИ ФУНКЦИЯ ВНУТРИ ФУНКЦИИ, ТО БУДЕТ: THIS - undefined (убираем this перед A и B, тогда консоль выводит 9)
function showThis (a, b) {
    console.log(this);
    function sum () {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5); 

// 2) ЕСЛИ ИСПОЛЬЗУЕМ МЕТОД ВНУТРИ ОБЪЕКТА, ТО КОНТЕКСТ ВЫЗОВА ВСЕГДА БУДЕТ ССЫЛАТЬСЯ НА ЭТОТ ОБЪЕКТ(контекст у методов объекта - сам объект)

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();

// 3) this В КОНСТРУКТОРАХ И КЛАССАХ = НОВЫЙ ЭКЗЕМПЛЯР ОБЪЕКТА
 
function User (name, id) {
    this.name = name;
    this.id - id;
    this.human = true;
}
let ivan = new User('Ivan', 23)

// 4) РУЧНАЯ ПРИВЯЗКА this (call + apply или bind)

function sayName (surname) {
    console.log(this);
    console.log(this.name + surname);
}
const man = {
    name: 'John'
};
sayName.call(man, 'Smith');
sayName.apply(man, ['Smith']);
// bind СОЗДАЕТ НОВУЮ ФУНКЦИЮ, СВЯЗАННУЮ С ОПРЕДЕЛЕННЫМ КОНТЕКСТОМ
function count(num) {
    return this*num;
}
const double = count.bind(2);
console.log(double(3));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const btn = document.querySelector('button');
btn.addEventListener('click', function () {                    //когда в обрабочике событий обычная функция, а не callback, 
        console.log(this);                                    //то this - сам элемент, на котором произошло событие
                                                            // если используем стрелочную функцию, то this теряется и будет undefined
})



const obg = {
    num: 5, 
    sayNumber: function() {                                   // this ссылается на сам объект(выведет объект)
        const say = () => {
            console.log(this);
        };
        say();
    }
};
obg.sayNumber();

const tripl = (a) => a * 3;
    
=======
<<<<<<< HEAD
const btn = document.querySelector('.btn');
      let timerId,
      i = 0;

function myAnimation () {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame () {
        if(pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);

// function logger () {
//     if(i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);
=======
"use strict"

const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// console.log(now.setHours(18));
// console.log(now);

let start = new Date();
for(let i = 0; i < 100000; i++) {
    let some = i**3;
}
let end = new Date();
alert(`Цикл отработал за ${end - start} миллисекунд`)
>>>>>>> 4f50b5e7555e95a5080aad35011825c63ee066d6
>>>>>>> c49425e20a878ce12fccefe63b1697c195d6fff5
>>>>>>> c0e9a72816de20e6ff6ddfe39e0f333b4e884b7e
