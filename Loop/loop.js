for(let n = 1; n <= 100; n++){
    document.write(" " + n);
}
document.write("<br>");
document.write("<br>");
let a = parseInt(prompt("Enter a number between 5 to 10 :"));
let b = parseInt(prompt("Enter another number between 5 to 10 :"));

for(let c = a; c <= b; c++){
    document.write(c + " ");
}

document.write("<br>");
document.write("<br>");

for(let r = 1; r <= 5; r++){
    let num1 = parseInt(prompt("Please enter first number : "));
    let num2 = parseInt(prompt("Please enter second number : "));
    let sum1 = num1 + num2;
    document.write(`Total of ${num1} and ${num2} is : ${sum1}` + "<br>");
}
document.write("<br>");
document.write("<br>");

//use of while loop:

let i = 1;
let sum2 = 0;
while (i <= 100) {
    sum2 = sum2 + i;
    i = i + 2;
}

document.write(sum2 + " ");

document.write("<br>");
document.write("<br>");

let num3 = 0;
for(let k = 1; k <=100 ; k++){
    num3++;
    if(num3 % 2 == 0 || num3 % 3 == 0 || num3 % 5 == 0 || num3 % 7 == 0 || num3 % 9 == 0){
        document.write("Devided by 2, 3, 5, 7 or 9 numbers is : " + num3 + "<br>");
    }else {
        document.write("<i>" + "This is real number : " + num3 + "</i>" + "<br>");
    }
}


document.write("<br>");
document.write("<br>");


for(let m = 1; m <= 100; m++){
    if(m % 2 == 0){
        continue;
    }
    document.write(m + " ");

}