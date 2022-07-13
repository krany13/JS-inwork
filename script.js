"use  strict"
// ФУНКЦИИ-КОНСТРУКТОРЫ

function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true; // ТЕПЕРЬ ФУНКЦИЯ СТАЛА КОНСТРУКТОРОМ
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
};

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`)
}

const ivan = new User('Ivan', 20); // СОЗДАЕТСЯ НОВЫЙ ОБЪЕКТ, С ТЕМИ СВОЙТСВАМИ, КОТОРЫЕ ВЫШЕ БЫЛИ ОПИСАНЫ
const alex = new User('Alex', 34);

ivan.exit();
ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);

// ЕСЛИ ВСЕ ЭТО СКОМПИЛИРОВАТЬ, ТО ВЫВЕДЕТСЯ
// User { name: 'Ivan', id: 20, human: true }
// User { name: 'Alex', id: 34, human: true }