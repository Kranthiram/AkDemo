(function(){
    console.log("hello");
})();

//((a,b)) => {
 //   console.log(a+b);
//})(10,10);

(function demo()
{
    console.log("hii");   
})();

//arrays in javascript
//it is use store heterogeneus datatypes
//declaration way
let arr = [10,"hello",1n,true,undefined]
console.log(arr);

//using new keyword
let arr1 = new Array(10, 20, 30)
console.log(arr1);

//objects in javascript
//used to store the data in the form of key and value pair.

//declaration way
let obj = {
    name : "abc",
    id : 1,
    boolean : true,
    arr : [10,20,30],
    null : null,
    undefined : undefined,
    demo : function()
            {
                console.log("hello");                
            }
}

console.log(obj);
console.log(obj.name);
console.log(obj.id);
console.log(obj.demo);
obj.demo();

//using constructor function
//it is used to create object

function obj1(name , id)
{
    this.name = name;
    this.id = id;
}
let p1 = new obj1("abc", 1)
console.log(p1);
console.log(p1.name);
console.log(p1.id);





