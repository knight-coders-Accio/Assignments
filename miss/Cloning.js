


// numbers, strings, boolean, 
// let a = 10
// let b = a // value is copied, photocopy

// a = 100 


// console.log(a) 
// console.log(b)


// let arr1 = [10,20,30] // 1000th location

// let arr2 = arr1  // arr2 => 1000th location

// arr1[0] = 100
// arr2[1] = 200


// console.log(arr1)

// console.log(arr2)


// let a = [10,20,30] 

// let t = a 

// let arr1 = [10,20,30] 

// let arr2 = [...arr1]

// arr1[0] = 1000

// console.log(arr1)

// console.log(arr2)

// for(let i = 0; i<arr1.length; i++){
//     arr2[i] = arr1[i]
// }
// arr1[0] = 1000
// console.log(arr1)



// console.log(arr2)


// let obj1 = {
//     name: 'Abhishek',
//     age: 21
// }

// let obj2 = obj1

// obj1.name = "Abhishek Kumar"

// console.log(obj1)
// console.log(obj2)

// let obj2 = {...obj1}


//  shallow copy
// let arr1 = [10,20,[30,40],50,[60,70,80],90,100]

// let arr2 = []

// arr2 = [...arr1]

// for(let i = 0; i<arr1.length; i++){
//     // console.log(arr1[i], typeof arr1[i])
//     arr2[i] = arr1[i]
//     // arr2[0] = arr1[0] => 10 
//     // arr2[1] = arr1[1] => 20
//     // arr2[2] = arr1[2] => [30,40]
// }


// arr1[0] = 1000

// arr1[2][0] = 3000



// console.log(arr1)
// console.log(arr2)


let arr1 = [10,20,[30,40],50,[60,70,80],90,100]

// let arr2 = structuredClone(arr1) 

// arr1[2][0] = 3000
// console.log(arr1)

// console.log(arr2)

// json: 

// let arr1Json = JSON.stringify(arr1) // "[10,20,[30,40],50,[60,70,80],90,100]"
// let arr2 = JSON.parse(arr1Json) // [10,20,[30,40],50,[60,70,80],90,100]

// arr1[2][0] = 3000

// console.log(arr1)
// console.log(arr2)