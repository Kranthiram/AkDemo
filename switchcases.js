let week = prompt("Enter your week day: ");
switch(week){
    
    case "monday":
    case "tuesday" :
        console.log("football");
        break;
    case "wednesday" :
    case "thrusday" :
        console.log("cricket");
        break;
    
        
    case "friday":
        console.log("basketball");
        break;
    case "sarturday":
        console.log("tennis");
        break;
    default:
        console.log("holiday");
        break
}