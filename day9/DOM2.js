console.log(window);
console.log(window.document);
console.log(typeof document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "Amazon"
console.log(document.body);

let link = document.links
 console.log(link);
// console.log(link[0]);
// console.log(link[1]);
// console.log(link[2]);

for(let i=0;i<link.length;i++)
    {
    console.log(link[i]);
    link[i].className = "demo";
    link[i].href = "https://www.youtube.com";
    link[i].target = "_blank";
}

//in-direct access(methods in dom)
//1)document.getElementById("value")
//2)document.getElementsByClassName("value")
//3)document.getElementsByTagName("value")
//4)document.querySelector("value")
//5)document.querySelectorAll("value")
//6)document.getElementbyName("value")

let a = document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent = "batch 6";
console.log(a.textContent);
a.style.backgroundColor = "red";
a.style.textAlign = "center";

let b = document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
console.log(b[0].textContent);
b[0].style.backgroundColor = "yellow";

console.log(b[1]);





