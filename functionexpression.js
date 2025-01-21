const a = Number(prompt("Enter a number"));
const b = Number(prompt("Enter b number"));
const c = Number(prompt("Enter c number"));



const v = function(){
    console.log("addition of three numbers"+a+b+c);
    console.log("subraction of three numbers"+a-b-c);
    console.log("multiplication of three numbers"+a*b*c);
    console.log("division of three numbers"+a/b/c);

}
const z = function(){
    if(a>b && a>c){
        console.log(a+"is the larget");
    }else if(b>a && b>c){
        console.log(b+"is the largest");
    }else{
        console.log(c+"is greastes")
    }
}

v()
z()
let s = function(a){
    console.log(a);
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    
    
}
s(10,20,30)



