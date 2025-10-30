let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let imgtag = document.querySelector(".imageone");
let clock = document.querySelector(".clock");
const photos = ["/project2/image/1.jpg", "/project2/image/2.jpg", "/project2/image/3.jpg", "/project2/image/4.jpg", "/project2/image/5.jpg", "/project2/image/6.jpg", "/project2/image/7.jpg", "/project2/image/8.jpg", "/project2/image/9.jpg", "/project2/image/10.jpg", "/project2/image/11.jpg", "/project2/image/12.jpg", "/project2/image/13.jpg", "/project2/image/14.jpg", "/project2/image/15.jpg", "/project2/image/16.jpg", "/project2/image/17.jpg"];
let count = 0;
setInterval(() => {
    count++;
        if(count >= photos.length){
            count = 0;
            imgtag.src = photos[count];
        }else {
            imgtag.src = photos[count];
        }
}, 3000);
// next.addEventListener("click", function(){
//         count++;
//         if(count >= photos.length){
//             count = 0;
//             imgtag.src = photos[count];
//         }else {
//             imgtag.src = photos[count];
//         }
// });
// prev.addEventListener("click", function(){
//     count--;
//     if(count < 0){
//         count = photos.length - 1;
//         imgtag.src = photos[count];
//     }else {
//         imgtag.src = photos[count];
//     }
// });
setInterval(() => {
    let dates = new Date();
    let hours = dates.getHours();
    let minutes = dates.getMinutes();
    let seconds = dates.getSeconds();
    hours = format(hours);
    minutes = format(minutes);
    seconds = format(seconds);
    let time = hours + ":" + minutes + ":" + seconds;
    clock.textContent = time;
}, 1000);
function format(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}