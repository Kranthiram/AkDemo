function main(task){
    let a = Number(prompt("Enter a number: "));
    let b = Number(prompt("Enter b number: "));
    console.log(task(a,b));
    
}
main(function(a,b){
    return a+b;
})
main(function(a,b){
    return a - b;
})
main(function(a,b){
    return a*b;
})

