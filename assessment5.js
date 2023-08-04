// ----------------------------------------------------------------------------------------------
// Question 3
// Write an example to convert callback hell to promise.
// ----------------------------------------------------------------------------------------------

// CALLBACK

function register(callback){   // PASSING A FUNCTION INSIDE THE PARAMETERS AS A CALLBACK
    setTimeout(()=>{
        console.log("register")
        callback()
    },2000)
}
function Email(callback){
    setTimeout(()=>{
        console.log("Email")
        callback()
    },1000)
}
function logins(callback){
    setTimeout(()=>{
        console.log("logins")
        callback()
    },100)
}
function userData(){
    setTimeout(()=>{
        console.log("userData")
    },4000)
}


// callback hell as the code is going horizntaly it will create a structe like pyramid which is known as the pyramid of doom

register(function(){    // PASSING THE FUNCTION INSIDE THE ARGUMENT AND ALL ARE DEPENDENT  ON EACH OTHER  AS IF ONE IS FAILED EXECUTION OF THE CODE WITH STOP AND GIVE US THE ERROR
        
         Email(function(){
                 logins(function(){
                        userData()
                    })      
          })
  })
  
  // OUTPUT- 
///register
// Email
// logins
// userData

// DRAWBACK - AS ITS HARD FOR US TO MANAGE AND REDABUILTY OF THE CODE IS HARD AND TO MAINTAIN THE CODE AND FINDING THE ERROR



// HANDLNG CALLBACK HELL USDING PROMISES




function register(){     // RETURN A PROMISE INSIDE THE FUNCTION
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("register")
        resolve()
    },2000)   
    })
   
}
function Email(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Email")
        resolve()
    },1000)
    })
}
function logins(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("logins")
        resolve()
    },100)
    })
    
}
function userData(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("userData")
        resolve()
    },4000)
    })
}

  register()   // USING .then TO CATCH THE VALUES AND CALLING THE FUNTION INSIDE AS THEN TAKE FUNCTINO AS A PARAMETERS AND ALL THE CODE RUN LINE BY LINE AS SINGLE LINE OR WE CAN synchronously
      .then(Email)
      .then(logins)
      .then(userData)
      .catch((error)=>{
          console.log(error)
      })

 // OUTPUT - 
//register
// Email
// logins
// userData



// ----------------------------------------------------------------------------------------------
// Question 5
// Extract the data from the API https://jsonplaceholder.typicode.com/users and print name, email id, phone number and company name from the extracted data
// ----------------------------------------------------------------------------------------------

let fetchData = async ()=>{    // creating the function Expression and make it async 
    try{                                // we put the code in try and catch  to handle the code and error in the program if some error come
        const data = await fetch('https://jsonplaceholder.typicode.com/users')   //  using await to get the resolved data and using fetch method to fetch the data from the host
        const users = await data.json()    // passing the fetch data which is promise then convert the data into the json (JavaScript Object Notation) 
         users.map((value)=>{   // using array inbuild function array.map to itereate the data and getting the expected data 
           console.log('*********');
           console.log(`Name :${value.name}`);    
           console.log(`E-mail:${value.email}`);
           console.log(`Phone Number :${value.phone}`);
           console.log(`Company Name :${value.company.name}`);
           
         })
    }catch(error){      // catch method catch the error if any error come 
    console.log(error);
    }
    }
    fetchData()   // calling the function 
//OUTPUT - *********
// Name:Leanne Graham
// E-mail :Sincere@april.biz
// Phone Number:1-770-736-8031 x56442
// Company Name:Romaguera-Crona
// *********
// Name:Ervin Howell
// E-mail :Shanna@melissa.tv
// Phone Number:010-692-6593 x09125
// Company Name:Deckow-Crist
// *********
// Name:Clementine Bauch
// E-mail :Nathan@yesenia.net
// Phone Number:1-463-123-4447
// Company Name:Romaguera-Jacobson
// *********
// Name:Patricia Lebsack
// E-mail :Julianne.OConner@kory.org
// Phone Number:493-170-9623 x156
// Company Name:Robel-Corkery
// *********
// Name:Chelsey Dietrich
// E-mail :Lucio_Hettinger@annie.ca
// Phone Number:(254)954-1289
// Company Name:Keebler LLC
// *********
// Name:Mrs. Dennis Schulist
// E-mail :Karley_Dach@jasper.info
// Phone Number:1-477-935-8478 x6430
// Company Name:Considine-Lockman
// *********

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
// QUESTION 9 
// ----------------------------------------------------------------------------------------------

// Define a custom reduce function on the Array prototype
Array.prototype.reduce2 = function (callback, initialValue) {
  // Get the array on which the reduce method is called
  const array = this;
    
  // If initialValue is provided, use it as the initial accumulator value; otherwise, use the first element of the array as the initial accumulator value
  let accumulator
    if(initialValue){
      accumulator = initialValue
  }
    else{
        accumulator = array[0]
    }
  // Start the iteration from the second element if initialValue is not provided

    let startIndex 
    if(initialValue){
        startIndex=0
    }else {
        startIndex=1
    }

  // Iterate over the array elements from the start index
  for (let index = startIndex; index < array.length; index++) {
    // Call the callback function with the accumulator, current element, current index, and the original array
    accumulator = callback(accumulator, array[index], index, array);
  }

  // Return the final accumulated value
  return accumulator;
};
let array = [10,20,30,40,50,60]
console.log(array.reduce2((acc,item)=>acc+item))
// OUTPUT = 210
