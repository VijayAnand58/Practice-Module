const { setTimeout } = require("timers");

let greet=function(){
    console.log("Hello");
}
setTimeout(greet,5000);