let c=document.getElementsByTagName("p")
console.log(c);
console.log(c[1]);
c[1].style.color = "red"
c[1].textContent = "hello"

let d = document.getElementsByName("demo2")
console.log(d);
console.log(d[1]);
d[1].style.backgroundColor = "crimson"
//console.log(document.body.childNodes);

//document.querySelector
//-->we have pass value with css symbol
//-->will retrun reference of first-element.

let e = document.querySelector("#demo")
console.log(e);

let e1 = document.querySelector(".demo")
console.log(e1);
//document.querySelectorAll
//-->we have pass value with css symbol
//-->we return reference in a node-list.

let f = document.querySelectorAll("#demo")
console.log(f);
console.log(f[0]);

let f1 = document.querySelectorAll(".demo")
console.log(f1);
console.log(f1[0]);

//events in dom
//------------------------------------------
//it is an action performed by end-user on a web page

//types:-
//1)key-board event 
        //key-up event
        //key-down event
        //key-press event
//2)mouse event
        //onmouseover event
        //onmouseleave event
        //dbclick
//3)form event
        //input event
        //blur event
        //focus event
//4)pointer event
        //click event


