const menu = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
function toggleMenu() {
    const click1 = Array.from(document.getElementsByClassName("list-1"));
    Array.prototype.globalForEach = function(callback) {
        this.forEach(callback);
    };
    click1.globalForEach((element) => {
        const click = document.getElementsByClassName("list-2");
        Array.from(click).forEach((click2) => {
            if (menu.classList.contains("showMenu")) {
                menu.classList.remove("showMenu");
                element.style.display = "none";
                click2. style.display = "none";
                closeIcon.style.display = "none";
                menuIcon.style.display = "block";
            } else {
                menu.classList.add("showMenu");
                closeIcon.style.display = "block";
                menuIcon.style.display = "none";
            }
        })
    })
}
hamburger.addEventListener("click", toggleMenu);
$(function(){
    $("a.counter").click(function()
    {
        return false; // prevent default browser refresh on "#" link
    });
});
// function show_hide_1() {
//     const clickHide = Array.from(document.getElementsByClassName("list-2"));
//     Array.prototype.globalForEach = function(callback) {
//         this.forEach(callback);
//     };
//     clickHide.globalForEach((element) => {
//         const click = document.getElementsByClassName("list-1");
//         Array.from(click).forEach((x) => {
//             if (x.style.display === "none" && element.style.display==="none") {
//                 x.style.display = "block";
//                 console.log(x)
//             } else if (element.style.display === "block") {
//                 element.style.display = "none"
//                 x.style.display = "block";
//                 console.log(element)
//             } else {
//                 x.style.display = "none";
//             }
//         });
//     })
// }
function show_hide_1() {
    const clickHide = Array.from(document.getElementsByClassName("list-2"));
    Array.prototype.globalForEach = function(callback) {
        this.forEach(callback);
    };
    function checkScreenSize() {
        const menuStyle = Array.from(document.querySelectorAll(".menuItem"));
        Array.prototype.globalForEach = function(callback) {
            this.forEach(callback);
        };
        var matchMedia = window.matchMedia("(max-width: 420px)");
        clickHide.globalForEach((menuStyle) => {
            const click = document.getElementsByClassName("list-1");
            const item = document.querySelectorAll('.menuItem')
            Array.from(click).forEach((x) => {
                if (matchMedia.matches) {
                    item.classList.remove('large-screen');
                    item.classList.add('small-screen');
                } else {
                    item.classList.remove('small-screen');
                    item.classList.add('large-screen');
                }
            });
        });
    }
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    clickHide.globalForEach((element) => {
        const click = document.getElementsByClassName("list-1");
        Array.from(click).forEach((x) => {
            if (x.style.display === "none" && element.style.display === "none") {
                x.style.display = "block";
            } else if (element.style.display === "block") {
                element.style.display = "none"
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        });
    });
}
show_hide_1();
function show_hide_2() {
    const clickHide = Array.from(document.getElementsByClassName("list-1"));
    Array.prototype.globalForEach = function(callback) {
        this.forEach(callback);
    };
    clickHide.globalForEach((element) => {
        const click = document.getElementsByClassName("list-2");
        Array.from(click).forEach((y) => {
            if (y.style.display === "none" && element.style.display==="none") {
                y.style.display = "block";
            } else if (element.style.display === "block") {
                element.style.display = "none"
                y.style.display = "block";
            } else {
                y.style.display = "none";
            }
        });
    })
}
