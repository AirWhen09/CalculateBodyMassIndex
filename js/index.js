let hourOfTheDay;
let greetings;
var time = new Date();

hourOfTheDay = time.getHours(); 

console.log(hourOfTheDay);

if(hourOfTheDay < 12){
    greetings = "Good Morning";
}else if(hourOfTheDay >= 12 && hourOfTheDay < 18){
    greetings = "Good Afternoon";
}else if(hourOfTheDay >= 18 && hourOfTheDay <= 23){
    greetings = "Good Evening";
}else{
    greetings = "Invalid Input";
}

var d = new Date();
var month = d.getMonth() + 1;

console.log(month);

// if(month == 1){
//     alert(greetings + ", Today's month is January!");
// }else if(month == 2){
//     alert(greetings + ", Today's month is February!");
// }else if(month == 3){
//     alert(greetings + ", Today's month is March!");
// }else if(month == 4){
//     alert(greetings + ", Today's month is April!");
// }else if(month == 5){
//     alert(greetings + ", Today's month is May!");
// }else if(month == 6){
//     alert(greetings + ", Today's month is June!");
// }else if(month == 7){
//     alert(greetings + ", Today's month is July!");
// }else if(month == 8){
//     alert(greetings + ", Today's month is August!");
// }else if(month == 9){
//     alert(greetings + ", Today's month is September!");
// }else if(month == 10){
//     alert(greetings + ", Today's month is October!");
// }else if(month == 11){
//     alert(greetings + ", Today's month is November!");
// }else if(month == 12){
//     alert(greetings + ", Today's month is December!");
// }


// 100 : 
let speed = 0;

let msg = speed > 100 ? "Too Fast" : speed >= 80 ? "Fast" : speed < 80 && speed > 0 ? "Ok" : "Stopped";

document.write(msg);

let person ={
    firstname : "Erwin",
    lastname : "Ibarra",
    email : "ibarra.erwin09@gmail.com"
}

for (const prop in person) {
    document.write(`${prop} : ${person[prop]} <br>`);
}

let numbers = [
    1 , 2, 3, 4
]

for (const iterator of object) {
    
}
