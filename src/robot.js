const robot = require('robotjs');

const mouse = robot.getMousePos();
console.log(mouse)
// function clickAtInterval(input) {
//     robot.moveMouse(30, 30)
//     setTimeout(() => {
//         const time = new Date()
//         const botMinutes = time.getMinutes()
//         const botSeconds = time.getSeconds()
//         const botMls = time.getMilliseconds()
//         console.log(`${botMinutes} : ${botSeconds} : ${botMls}`)
//
//         robot.mouseClick('left');
//     }, input);
// }
//
// function timeRemind(mlsInOneMinute, mlsInOneSecond, mls) {
//     const time = new Date()
//     const botMinutes = time.getMinutes()
//     const botSeconds = time.getSeconds()
//     const botMls = time.getMilliseconds()
//
//     console.log(`${botMinutes} : ${botSeconds} : ${botMls}`)
//
//     let realMin = mlsInOneMinute - botMinutes - 1
//     let realSec = mlsInOneSecond - botSeconds - 1
//     let realMls = mls - botMls
//
//     if (realSec < 0) realSec += 60
//     if (realMls < 0) realMls += 1000
//
//     // console.log(`${realMin} : ${realSec} : ${realMls}`)
//     const inputMin = (realMin * 60 * 1000)
//     const input = (inputMin > 0 ? inputMin : 0) + (realSec * 1000) + realMls -100
//     clickAtInterval(input)
// }
//
// function startAutoClicker() {
//     const mlsInOneMinute = +prompt('Enter minute: ')
//     const mlsInOneSecond = +prompt('Enter seconds: ')
//     const mls = +prompt('Enter milliseconds: ');
//
//     timeRemind(mlsInOneMinute, mlsInOneSecond, mls)
// }
//
// startAutoClicker();
