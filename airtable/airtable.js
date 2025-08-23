let airtableForm = document.querySelector(".airtableForm");
let formButton = document.getElementById("formButton");
let emailValue = document.getElementById("emailValue");
formButton.addEventListener("click", function(){
    let inputValue = emailValue.value;
    console.log(`User email : ${inputValue}`);
});