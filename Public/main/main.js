const menu = document.getElementById("menu");
const mobile = document.getElementById("mobile");
const closebtn = document.getElementById("close");

menu.addEventListener("click", () =>{
    mobile.style.left = 0;
    mobile.style.width = 200+"px";
})
closebtn.addEventListener("click", () =>{
    mobile.style.left = -50+'px';
    mobile.style.width = 0+"px";
})
