let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let body = document.querySelector("body");
let p = document.querySelector("p");
let img = document.querySelector("img");
let showclock = document.querySelector("h3");
let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let clock = document.querySelector(".clock");
let confirmtext = document.querySelector(".confirmtext");
let prompttext = document.querySelector(".prompttext");
let para2 = document.querySelector(".para2");
let alert = document.querySelectorAll(".alert");
let closebtn1 = document.querySelectorAll(".closebtn1");
let closebtn2 = document.querySelector(".closebtn2");
const photos = ["/imag/1.jpg", "/imag/2.jpg", "/imag/3.jpg", "/imag/4.jpg", "/imag/5.jpg", "/imag/6.jpg", "/imag/7.jpg", "/imag/8.jpg", "/imag/9.jpg"];

btn1.addEventListener("click", function(){
    p.textContent = "Hi..";
    p.classList.add("para1");
});
btn2.addEventListener("click", function(){
    p.textContent = "";
});
let count = 0;
btn3.addEventListener("click", function(){
    count--;
    if(count < 0){
        count = photos.length - 1;
        img.src = photos[count];
    }else {
        img.src = photos[count];
    }
});
btn4.addEventListener("click", function(){
    count++;
    if(count >= photos.length){
        count = 0;
        img.src = photos[count];
    }else {
        img.src = photos[count];
    }
});
form.addEventListener("submit", function(e){
    e.preventDefault();
    let info = {
        names : input[0].value,
        email : input[1].value,
        password : input[2].value,
    };
    console.log(info);
});
btn5.addEventListener("click", function(){
    body.classList.toggle("bgColorRed");
});
btn6.addEventListener("click", function(){
    body.classList.toggle("bgColorBlue");
});
closebtn1[0].addEventListener("click", function(){
    setTimeout(() => {
        alert[0].style.display = "none";
    }, 600);
});
closebtn1[1].addEventListener("click", function(){
    setTimeout(() => {
        alert[1].style.display = "none";
    }, 600);
});
closebtn1[2].addEventListener("click", function(){
    setTimeout(() => {
        alert[2].style.display = "none";
    }, 600);
});
const clockStart = () => {
    setInterval(() => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        hours = format(hours);
        minutes = format(minutes);
        seconds = format(seconds);
        let time = hours + ":" + minutes + ":" + seconds;
        showclock.textContent = time;
    }, 1000);
}
clockStart();
function format(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}
btn7.addEventListener("click", function(){
    let cfm = confirm("Are you sure you want to delete?");
    if(cfm){
        confirmtext.textContent = "Item deleted successfully";
        confirmtext.classList.add("cfirmtext");
    }else{
        confirmtext.textContent = "Not deleted!";
        confirmtext.classList.add("cfirmtext");
    }
    setTimeout(() => {
        confirmtext.textContent = "";
        confirmtext.classList.remove("cfirmtext");
    }, 2000);
});
btn8.addEventListener("click", function(){
    let prmt = prompt("Enter your name please :");
    if(prmt == null || prmt == ""){
        prompttext.textContent = "Please enter your name";
        prompttext.classList.add("prmptext");
    }else {
        prompttext.textContent = "Welcome back " + prmt;
        prompttext.classList.add("prmptext");
    }
    setTimeout(() => {
        prompttext.textContent = "";
        prompttext.classList.remove("prmptext");
    }, 2000);
});
closebtn2.addEventListener("click", function(){
    para2.style.display = "none";
});
btn9.addEventListener("click", function(){
    para2.style.display = "inline-block";
});