// #primitive datatype
// 7 types :String,number,boolean,null,undefined,symbol,BigInt

let num20=100000000n
// console.log(typeof num20)

const id = Symbol('123')
const anotherID= Symbol('123')

// console.log(id=== anotherID)


//Non-primitive datatype(reference datatypes)
//array,object,functions

const hero=["Shaktiman","Ironman","Superman"]
let obj1={
    name:"ranvijay",
    age: 21
}

let myfunction = function(){
    console.log("hello world")
}
// myfunction()

console.log(typeof myfunction)

console.log(typeof id)

console.log(typeof null)  //object