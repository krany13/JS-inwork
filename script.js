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
