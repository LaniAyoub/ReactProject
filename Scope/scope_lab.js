    // Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{ 
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet); // is not printed cuz of is it let and also const 
/*
function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError*/

// Practice task
{
    let x =5;
    const y = "ayoub";
    var z = 10;
    console.log("Before reassignment")
    console.log("x=",x);
    console.log("y=",y);
    console.log("z=",z);
    x=6;
    //y="w"; error when reassign const
    z=20;
    console.log("After reassignment")
    console.log("x=",x);
    console.log("y=",y);
    console.log("z=",z);
}
x=22;
y="w";
z=22;
console.log("After reassignment out of {}")
console.log("x=",x);
console.log("y=",y);
console.log("z=",z);