let num = 10.567;
console.log(typeof(num));
console.log(num.toFixed(1));

for(let n = 1; n <= 5; n++){
    let prm = prompt("Enter a number between 1 to 5 : ");
let rN = Math.floor((Math.random() * 5) + 1);
if(rN == prm){
    console.log("You are correct");
}else {
    console.log("You are wrong, correct random number is : " + rN);
    
}
}
let numb = 50;

if(numb % 2 != 0){
    console.log("Odd");
}else {
    console.log("Even");
}

let para1 = document.getElementById("para1");
let marks = parseFloat(prompt("Enter your average exam number : "));
if(marks == null || marks == ""){
    para1.textContent = "Please enter your average number : ";
}
else if(marks > 100 || marks < 1){
    para1.textContent = "Invalid number & gread!";
}else if(marks >= 80 && marks <= 100){
    para1.textContent = "Congratulation! You got A+ gread.";
} else if(marks >= 70 && marks <= 79) {
    para1.textContent = "Congratulation! You got A gread.";
}else if(marks >= 60 && marks <= 69){
    para1.textContent = "Congratulation! You got A- gread.";
}else if (marks >= 50 && marks <= 59){
    para1.textContent = "Congratulation! You got B gread.";
}else if (marks >= 40 && marks <= 49){
    para1.textContent = "Congratulation! You got C gread.";
}else if (marks >= 33 && marks <= 39){
    para1.textContent = "Congratulation! You got D gread.";
}else {
    para1.textContent = "You are failed!";
}


let para2 = document.getElementById("para2");

let letter = prompt("Enter a letter and check Its vowel or consonent.");

letter = letter.toLowerCase();
if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
    para2.textContent = "Vowel";
} else {
    para2.textContent = "Consonent";
}