// //implicit arrow function

// () => console.log("he");
// //explicit arrow function
// let a = ()=>{return "hello"}
// console.log(a());

let main = (task)=>{
    console.log(task);
    console.log(task());
main()=>{
    return "iam cb1"
}
}