// let obj={
//     namr:'kranthi',
//     id:10,
//     age:20
// }
// console.log(obj);
// let a=JSON.stringify(obj);
// console.log(a);
// let b=JSON.parse(a)
// console.log(b);

// three way to featch the json data 
// 1 fetch()\
// 2 axios
// 3 AJAX
// let a = window.fetch("https://fakestoreapi.com/products")
//   .then((val) => val.json())
//   .then((res) => {
//     console.log(res);
//     res.map((v) => {
//       console.log(v);
//       console.log(v.name);
//       document.body.innerHTML += `<h1>${v.name}</h1>`;  
//       document.body.innerHTML += `<img src="${v.image}">`;
//     })
//   });

// let demo = async() => {
//   let data = await window.fetch("country.json") //to avoid 'then' method we use await()method
//   console.log(data);
//   let res = await data.json()
//   console.log(res);

//   res.map((x) => {
//     console.log(x);
//     console.log(x.country);
//     let select = document.getElementById("select");
//     console.log(select);
//     select.innerHTML += `<option value =${x.country}>${x.country}</option>`

//     let demo1 = document.getElementById("demo1")
//     console.log(demo1);
//     demo1.innerHTML += `<option value =${x.country}>${x.country}</option>`
//   })
  
  
// }
// demo();

let btn = document.getElementById("btn");
console.log(btn);

btn.onclick = () => {
  let search = document.getElementById("search").value 
  console.log(search);
   window.fetch(`https://pixabay.com/api/?key=48475977-420f63b0c753a1dc31bac1056&q=${search}&image_type=photo&pretty=true`)
   .then((data) => data.json())
   .then((res) => {
    console.log(res);
    console.log(res.hits);
    res.hits.map((x) => {
      console.log(x);

    let div = document.getElementById("div")
    console.log(div);

    div.innerHTML += `<img src=${x.previewURL} />`
    })
  })

}
