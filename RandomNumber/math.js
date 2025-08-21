// let num = 30.4999;
// console.log(num);
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.pow(9,2));
// console.log("Root value of 64 is : " +  Math.sqrt(64));
// console.log("Max number is : " + Math.max(2, 4, 6, 8, 1, 3, 9, 0, 5, 7));
// console.log("Min number is : " + Math.min(2, 4, 6, 8, 1, 3, 9, 0, 5, 7));
// console.log(Math.random().toFixed(5));
// console.log(Math.floor(Math.random() * 6 + 1));


let luduButton = document.getElementById("btn");
let image = document.getElementById("ludo");
luduButton.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random() * 6) + 1;    
    let imageSource = "Ludu_Image/" + randomNumber + ".png";
    image.src = imageSource;
    
});


