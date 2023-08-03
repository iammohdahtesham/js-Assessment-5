// ----------------------------------------------------------------------------------------------
// Question 6 
// Explain and write a code snippet for the following:-
// a).  Promise.all()
// b). Promise.allSettled()
// c). Promise.any()
// d). promise.race()
// ----------------------------------------------------------------------------------------------

//Creating multiple promises

let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Value 1");
        }, 1000);
});

let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
                // resolve("Value 2");
                reject(new Error("Error"));  // Giving error to check the function of the code 
        }, 2000);
});

let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Value 3");
        }, 3000);
});

let promise_all = Promise.all([p1, p2, p3])

//OUTPUT - [ 'Value 1', 'Value 2', 'Value 3' ]

// EXPLANATION -  Promise.all give all the values of the code together when the all thr promise completed or if anyone of the promise get error all the execution stop

let promise_all = Promise.allSettled([p1, p2, p3])

//OUTPUT -  [
//   { status: 'fulfilled', value: 'Value 1' },
//   { status: 'fulfilled', value: 'Value 2' },
//   { status: 'fulfilled', value: 'Value 3' }
// ]

// EXPLANATION - Promise.allSettled gives all the status as fullfilled or rejected  and values of the promises and return all the values together 

let promise_all = Promise.race([p1, p2, p3])
// OUTPUT= Value 1

// EXPLANATION- Promise.rece give the value of the promise which give the value at first either its an rejected or resolved

let promise_all = Promise.any([p1, p2, p3])
// OUTPUT - Value 1

// EXPLANATION - Promise.any give us the fastest promise which execute first or only give the output of the resolved promise


promise_all.then((value) => {
        console.log(value)  // here we console the values
})  


// ----------------------------------------------------------------------------------------------
