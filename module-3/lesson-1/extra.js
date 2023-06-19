// async function numbers() {
//     let n = await 100;

//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
// }

// numbers();

// console.log('hello world')

// setTimeout(() => {
//     console.log('step 1')
//     setTimeout(() => {
//         console.log('step 2')
//         setTimeout(() => {
//             console.log('step 3')
//             setTimeout(() => {
//                 console.log('step 4')
//                 setTimeout(() => {
//                     console.log('step 5')
//                     setTimeout(() => {
//                         console.log('step 6')
//                         setTimeout(() => {
//                             console.log('step 7')
//                             setTimeout(() => {
//                                 console.log('step 8')
//                                 setTimeout(() => {
//                                     console.log('step 9')
//                                     setTimeout(() => {
//                                         console.log('step 10')
//                                     }, 1000)
//                                 }, 1000)
//                             }, 1000)

//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 2000);

// function test1(){
//     console.log('test 1')
// }

// function test2(callback){
//     console.log("test 2")
//     callback();
// }

// test2(test1())

// let i = 0;
// let h=0;
// let m=0;

// let x = setInterval(() => {
// i++;
// if (i > 59) {
//       i=0;
//       m++;
//       console.log( "daqiqa: ",m)
//       if(m > 59) {
//         m=0;
//         h++;
//         console.log("soat: ",h)
//         if(h >23) {
//             h=0;
//         }
//       }

// }
// console.log("soniya: ", i);

// },1000);

// clearInterval(x);

// function countDown(fromNumber) {
//     console.log(fromNumber);

//      countDown(fromNumber-1);

// }

// countDown(3);

// function countDown(fromNumber) {
//     console.log(fromNumber);
//     let nextNumber = fromNumber + 1;

//     if (nextNumber < 10) {
//         countDown(nextNumber);
//     }
// }
// countDown(1);


// for(let i = 1; i <10; i++){
// console.log(i)
// debugger
// }
