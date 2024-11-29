function scuberGreetingForFeet(feet){
  // Write your code here!
  let responce;
  if (feet <= 400){
    return responce = 'This one is on me!';
  }else if(feet > 400 && feet < 2000){
    return responce = 'That will be twenty bucks.';
  }else if (feet > 2000 && feet <= 2500){
    return responce = 'I will gladly take your thirty bucks.';
  }else{
    return responce = 'No can do.';
  }
}

scuberGreetingForFeet(30);
console.log(responce)

function ternaryCheckCity(city){
  // Write your code here!
   let  message = city === "NYC" ? "Ok, sounds good." : "No go.";
   return message;
}
console.log(ternaryCheckCity(""));




function switchOnCharmFromTip(a){
  // Write your code here!
  
  let reply;
switch(true){
  case a === "generous" :
    reply ='Thank you so much.';
    break;

    case a === "not as generous" :
      reply = "Thank you.";
    break;

    default :
          reply = "Bye. ";
          break;
}
  return reply;
}
console.log(switchOnCharmFromTip())