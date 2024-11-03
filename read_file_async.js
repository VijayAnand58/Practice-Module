const fs=require('fs');
console.log("File reading")
fs.readFile('f1.txt','utf-8',cb1)
function cb1(err,data){
    if(err){throw err;}
    console.log(data);
}
fs.readFile('f2.txt','utf-8',cb2)
function cb2(err,data){
    if(err){throw err;}
    console.log(data);
}
console.log("File exit")
// read file sync: for synchronus program
// read file : for asychronous program
// call back queue allows the execution of code only when the call stack is empty
