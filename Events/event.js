

let subscribe = document.getElementById("subscribe");
let like = document.getElementById("like");
let form1 = document.getElementById("form1");
let circle1 = document.querySelector(".circle1");
let circle2 = document.getElementById("circle2");

subscribe.addEventListener("click", function(){
    subscribe.innerHTML = '<i class="fa-solid fa-bell"></i> Subscribed';
    subscribe.style.backgroundColor = "orange";

});
like.addEventListener("click", function(){
    like.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked';
    like.style.backgroundColor = "tomato";
});
form1.addEventListener("keyup", function(){
    circle1.style.rotate = "21600deg";
    circle1.style.transitionDuration = "40s";
    circle2.style.rotate = "21600deg";
    circle2.style.transitionDuration = "60s";

});



let subscribe2 = document.getElementById("subscribe2");
let like2 = document.getElementById("like2");
let form2 = document.getElementById("form2");

subscribe2.addEventListener("click", function(){
    subscribe2.innerHTML = '<i class="fa-solid fa-bell"></i> Subscribed';
    subscribe2.style.backgroundColor = "green";
    subscribe2.style.color = "white";

});
like2.addEventListener("click", function(){
    like2.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked';
    like2.style.backgroundColor = "blue";
    like2.style.color = "white";
});
form2.addEventListener("keyup", function(){
    circle2.style.opacity = "0.5";
    circle1.style.rotate = "21000deg";
    circle1.style.opacity = "0.5";
    circle1.style.transitionDuration = "60s";
});