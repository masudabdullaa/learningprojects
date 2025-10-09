let calcId = document.getElementById("calcId");

function clearAll(){
    calcId.value = "";
}
function buttonAll(x){
    calcId.value += x;

}
function calculation(){
    let z = calcId.value;
    calcId.value = eval(z);
}