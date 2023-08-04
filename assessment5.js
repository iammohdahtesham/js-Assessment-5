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
// Name:Kurtis Weissnat
// E-mail :Telly.Hoeger@billy.biz
// Phone Number:210.067.6132
// Company Name:Johns Group
// *********
// Name:Nicholas Runolfsdottir V
// E-mail :Sherwood@rosamond.me
// Phone Number:586.493.6943 x140
// Company Name:Abernathy Group
// *********
// Name:Glenna Reichert
// E-mail :Chaim_McDermott@dana.io
// Phone Number:(775)976-6794 x41206
// Company Name:Yost and Sons
// *********
// Name:Clementina DuBuque
// E-mail :Rey.Padberg@karina.biz
// Phone Number:024-648-3804
// Company Name:Hoeger LLC
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
