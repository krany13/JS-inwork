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
    
