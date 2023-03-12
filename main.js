//1.== &===
var x = "2"
var y = 2;
console.log(x == y)
console.log(x === y)
//spread operator
let arr = [1, 2, 3, 4]
let arr1 = [5, 6, 7, 8]
let arr2 = [...arr, ...arr1]
let [ret,ret1,...rest]=arr2
console.log(rest)
console.log(arr2, "is spreading")

//using function for spread operator
function demo(a, b, c) {
    console.log(a, b, c)
}
let arr3 = [1, 2, 3]
demo(...arr3)
//using object
//3.var let const
var a = 20
var a = 30
console.log(a)

// let b=20
//  let b=30
//  console.log(b)

// const c=20
// const c=30
// console.log(c)

//first class function
let myfun = function () {
    console.log("hello first claa")
}
myfun()
//closure
function closure() {
    let abc = "king"
    function closure1() {
        console.log(abc)
    }
    closure1()
}
closure()
9// call apply bind
var emp1={
    name:"nithin",
    age:21
}
function invite(greeting1){
    console.log(greeting1+" "+this.name+" "+this.age)
}
invite.call(emp1,"hi")
 //apply

var emp1={
    name:"nithin",
    age:21
}
function invite(greeting1){
    console.log(greeting1+" "+this.name+" "+this.age)
}
invite.apply(emp1,["hey dude apply"])
//bind
var emp1={
    name:"nithin",
    age:21
}
function invite(greeting1){
    console.log(greeting1+" "+this.name+" "+this.age)
}
let emp2=invite.bind(emp1)
emp2("hello bind")
