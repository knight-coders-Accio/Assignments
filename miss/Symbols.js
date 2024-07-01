// https://javascript.info/symbol#symbols

// let userDetails = {
//     name: 'Abhishek',
//     age: 21,
//     work: 'Software Developer',
//     secretWork: "I am a Raw Agent"
// }


// invisible field

// console.log(userDetails)


// Symbols:

// let x = Symbol("id") // x will get a value
// let y = Symbol("name") // y will get a value

// console.log(x.description, typeof x)
// console.log(y.description, typeof y)

// console.log(x==y)


// let x = Symbol("key") // x will get a value

// let obj = {
//     name: 'Abhishek',
//     age: 21,
//     work: 'Software Developer',
//     [x]: "I am a Raw Agent"
// }

// console.log(obj)


// for(let key in obj){
//     console.log(key)
// }

// obj[x] = "I am a Raw Agent Manager"

// console.log(obj)



// let obj = {
//     name: 'Abhishek',
//     age: [21, 22, 23],
//     work: 'Software Developer',
// }

// // I want to freeze the object

// Object.freeze(obj)

// // obj.name = "Abhishek Kumar"
// obj.age[0] = 25

// console.log(obj)


// let arr = [10,20,30]