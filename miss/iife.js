

// anonymous functions or no nae functions: IIFE (Immediately Invoked Function Expression)


// (function(a,b){
//     let x = 100
//     console.log(a+b);
// })(10,20)


//


// a pice of code , which a quite secret code


// function hello(){
//     let a = 10;

//     return ()=>{
//         a = a+1;
//         console.log(a);
//     }
// }





function hello(){
    let a = 10; // private variable

    return function(){
        a = a+1;
        console.log(a);
    }
}

// let x = hello();


// x()

// x()



// google sheet (40-50%) 

// bigNumbels, Symbols