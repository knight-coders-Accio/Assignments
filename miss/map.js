// array => special type of object

// map is a special type of object


// let m = new Map() 

// // key , value pair 

// m.set(10, "Abhishek")
// m.set(20, "Kumar")
// m.set(30, "Raw Agent")
// m.set(40, "Manager")
// m.set(10, "Developer")






// access the value

// console.log(m.get(10)) // Abhishek

// delete the value

// m.delete(10)


// console.log(m, typeof m) // Map {} object

// for(let t of m){
//     console.log(t[0], t[1])
// }

// for(let t of m.keys()){
//     console.log(t)
// }

// for(let t of m.values()){
//     console.log(t)
// }


// let arr = [10,20,10,30,10,20,30,40,100,40,30,20,10,10,20]

// // count the frequency of each element

// let m = new Map()
// // {
// //     10: 3,
// //     20: 1,
// //     30: 1,
// //     
// // }

// for(let t of arr){
//     // m.set(t,1)
//     if(m.has(t)){
//         let count = m.get(t)
//         count =  count+1
//         m.set(t,count)
//     }
//     else{
//         m.set(t,1)
//     }
// }

// console.log(m)



let arr = [1,9,10,99,20,5,35,11]
// 1, 
// 9
// 10,5

// find the pair of elements whose sum is 15 => [5,10]

// let m = new Map()


// for(let t of arr){
//     m.set(t,1)
// }

// console.log(m)



// for(let t of arr){

//     let n1  = t 
//     let n2 = 15 - t // 15 - 1 = 14


//     if(m.has(n2)){
//         console.log(n1, n2)
//         break
//     }

// }