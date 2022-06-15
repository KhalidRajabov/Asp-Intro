// let partyPromise = true;
// let giveParty = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         if (partyPromise) {
//             resolve("party is given")
//         }
//         else{
//             reject("party not given")
//         } 

//         console.log("process is done");
//     }, 2000);
// })


// let partyPromise = true;
// let giveParty = new Promise(function (resolve, reject) {
//  setTimeout(() => {
//  if (partyPromise) {
//  resolve("I given party to friends");
//  } else {
//  reject("I am not given party to friends");
//  }

//  console.log("timer ended");
// }, 2 * 1000);
// });

// console.log(giveParty);

// fetch('https://jsonplaceholder.typicode.com/todddos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error=>{
//     console.log(error);
//     console.log(error.message+ " error");
//   })


// async function getData(){
//     let data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   console.log(data);
// }

// getData()

async function sum(num1, num2){
    return num1 +num2
}

sum(5, 9).then(data=>console.log(data))