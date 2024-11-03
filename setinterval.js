const { clearInterval } = require("timers");
const { setTimeout } = require("timers/promises");

function hello(){
    console.log("Hello HI");
}
let timer=setInterval(hello,1000);
setTimeout(function(){
    clearInterval(timer)
},3000)