const menu = document.querySelector(".nav");
const menuItem = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
hamburger.addEventListener("click", toggleMenu);
// menuItem.forEach(function (menuItem){
//     menuItem.addEventListener("click", toggleMenu);
// })
$(function(){
    $("a.counter").click(function()
    {
        return false; // prevent default browser refresh on "#" link
    });
});
function show_hide_1() {
    const clickHide = Array.from(document.getElementsByClassName("list-2"));
    Array.prototype.globalForEach = function(callback) {
        this.forEach(callback);
    };
    clickHide.globalForEach((element) => {
        const click = document.getElementsByClassName("list-1");
        Array.from(click).forEach((x) => {
            if (x.style.display === "none" && element.style.display==="none") {
                x.style.display = "block";
                console.log(x)
            } else if (element.style.display === "block") {
                element.style.display = "none"
                x.style.display = "block";
                console.log(element)
            } else {
                x.style.display = "none";
            }
        });
    })
}
function show_hide_2() {
    const clickHide = Array.from(document.getElementsByClassName("list-1"));
    Array.prototype.globalForEach = function(callback) {
        this.forEach(callback);
    };
    clickHide.globalForEach((element) => {
        const click2 = document.getElementsByClassName("list-2");
        Array.from(click2).forEach((y) => {
            if (y.style.display === "none" && element.style.display==="none") {
                y.style.display = "block";
                console.log(y)
            } else if (element.style.display === "block") {
                element.style.display = "none"
                y.style.display = "block";
                console.log(element)
            } else {
                y.style.display = "none";
            }
        });
    })
}