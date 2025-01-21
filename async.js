// function main(m,n)
// {
//     for(let i=m;i<=n;i++){
//         console.log(i);   
//   }
//  }
//  main(1,10)
// function demo()
// {
//     console.log("no's printed");
// }
// demo()

//asynchronus function
// making a way for other functions to execute.

//two-methods
//1)setTimeout(cbf, delay-time)
//2)setInterval(cbf, delay-time) these methods present in window object
//---------------------------------------------------------------------------------------
// window.setTimeout(() =>{
//     console.log("setTimeout");
// },5000)
//-----------------------------------------------------------------------------------------
// window.setInterval(() =>{
//     console.log("setInterval");
// },3000)
//-----------------------------------------------------------------------------------------

// function main(m,n){
//     setTimeout(() =>{
//         for(let i=m;i<=n;i++){
//           console.log(i);
//         }  
//     },5000)

// main(1, "10a")
// function demo()
// {
//     console.log("no 's printed");
// }
// demo()
//-------------------------------------------------
//Promise
//--> it is an object
// --> used to look after async function

//3-phase
//1) pending phase(either it will be resolve or reject)
//2) resolve/fulfill phase(async fun working properly)
        //--->.then(cbf)
//3) reject phase(async fun not working properly)
        //--->.catch(cbf)

//syntax of promise:-
// new Promise((resolve, reject)=>{
    //--async-fun-code
    //})
    //.then(cbf) -->for resolve
    //.catch(cbf) -->for reject

let online = window.navigator.online

new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if(online == true)
        {
            return resolve()
        }else{
            return reject()
        }
    },5000)
})
.then(() => console.log("online ...😎")
)
.catch(() => console.log("of-line ...😒")
)