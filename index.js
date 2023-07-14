// const name = "ayush";
// console.log("ayush");

const fs = require("fs");

// fs.writeFileSync('read.txt' , "this is first cource")

// fs.appendFileSync('read.txt' , "yes i am doing great");



const buf_data = fs.readFileSync('read.txt');

console.log(buf_data);

org_data = buf_data.toString();

console.log(org_data);

fs.renameSync("read.txt" , "read1.txt");