
// function hello(){
//     console.log('Hello World');
//     return ()=>{
//         console.log('inside function');
//     }
// }


// let x = hello()

// console.log(x);

// x()


// function test1(){
//      console.log("A")
//     return ()=>{
//         console.log('B');
//         return ()=>{
//             console.log('C');
//         }
//     }
// }


// let x = test1()



function hello(){
    let a = 10;

    return ()=>{
        a = a+1;
        console.log(a);
    }
}

let x = hello();

x()
x()
x()
x()  // 14

let y = hello();

y()  //11 or 15
y()


// let count = 0 // 4

// function hello(){
//     count = count + 1;
//     console.log(count);
// }


// hello()
// hello()
// hello()
// hello()