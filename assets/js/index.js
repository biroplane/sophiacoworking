var fab = document.querySelector(".fab");

var page = document.querySelector(".page");
var menu = document.querySelector(".menu");

fab.addEventListener("click", function (e) {
    console.log("EVENT ", e);
    toggleClass()
});

page.addEventListener('click', e => {
    toggleClass()
})

function toggleClass() {
    if (page.classList.contains('active')) {

        page.classList.remove("active");
        menu.classList.remove("active");
    } else {

        page.classList.add("active");
        menu.classList.add("active");
    }
}