//variables
let a=10; //block scoped
const b=20; //blocked scoped
var c=30; //function scoped
//eg
if(true){
    let x=100;
    const y=200;
    var z=300;
    console.log(x);
}
console.log(z); //accessible
//console.log(x); //not accessible




//data types
//1.primitive data types
//2.non-primitive data types
 
//primitive data types
let num=1;
let d=null;
let e="bipin"; //string
let f="@"; //symbol
let g=true; //boolean
let h; //undefined

//non-primitive data types
let arr=[1,2,3,4]; //array
let obj={name:"bipin",age:22}; //object
function func(){ //function
    return "hello";
}
//console.log(typeof func);

//type conversion
let val=10; //number
let str=String(val); //convert number to string
//console.log(typeof str);


//operators
//arithmetic operators //assignment opertators //comparison operators //logical operators

/*arithmetic operators are + - * / % ++ --
let input= prompt("Enter a number:");
let inputnum= prompt("Enter a number:");
let sum=Number(input)+Number(inputnum);//by default js takes the valur as string 
 we need to tell it is an number
console.log("Sum is: "+sum);*/

//assignment operators are = += -= *= /= %=
let assign=10;
assign+=5; //assign=assign+5
console.log(assign);
//comparison operators are == === != !== > < >= <=
//logical operators are && || !
//conditional (ternary) operator ? :
let age=18;
let vote=(age>=18) ? "Yes" : "No";
console.log(`your age is ${age}`); //we are using template literals where we use backticks ``
//and ${} to embed expressions
//console.log("your vote is "+vote);
console.log("vote");