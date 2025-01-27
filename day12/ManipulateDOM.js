//Manipulation of DOM 
//-->Used to update/modify an DOM
//-->createElement()

//step1:-
   //create an element using createElement() method.
   //eX:
   //let a = document.createElement("h1")
   //console.log(a) //<h1></h1>
   //a.textContent = "hello world"
   //<h1>hello-world</h1>

//step2:-
    //append element to the parent-element using append/appendChild() method.
    // eg:-
    // document.body.appendChild(a)

let a = document.createElement("h1");
console.log(a);
a.textContent = "HI Kranthi";

document.body.appendChild(a);
a.style.backgroundColor = "blue"

//create a div tag
let div = document.createElement("div")
console.log(div);
document.body.appendChild(div);
div.style.border = "5px solid" 
//create ol tag
let ol = document.createElement("ol")
console.log(ol);
div.appendChild(ol);

//create li tags
let li1 = document.createElement("li")
console.log(li1);
ol.appendChild(li1);
li1.textContent = "node.js"

let li2 = document.createElement("li")
console.log(li2);
ol.appendChild(li2);
li2.textContent = "react.js"
ol.setAttribute("type", "i")
//=--------------------------------------------------
let table = document.createElement("table");
console.log(table);
document.body.appendChild(table)

table.setAttribute("border","2px solid");

let tr1 = document.createElement("tr");
console.log(trl);
table.appendChild(tr1);

let td1 = document.createElement("td");
console.log(td1);
td1.textContent = "hello"
tr1.appendChild(td1);



// let tr2 = document.createElement("tr");
// console.log(tr2);
// table.appendChild(tr2);

// let tr3 = document.createElement("tr");
// console.log(tr3);
// table.appendChild(tr1);

// let tr4 = document.createElement("tr");
// console.log(tr4);
// table.appendChild(tr4);






