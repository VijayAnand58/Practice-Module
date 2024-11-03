const fs=require("fs");
console.log("Welocome to File reading");
let data=fs.readFileSync(`f1.txt`,"utf-8");
console.log(data);
console.log("Exit file reading");