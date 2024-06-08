var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

var typed = new Typed(".input", {
    strings: ["Frontend Developer", "UX Designer", "Web Developer"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
});

function copyEmail() {
    const email = "david.casildoenciso@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const copyMsg = document.getElementById("copy-msg");
        copyMsg.style.display = "inline";
        setTimeout(() => {
            copyMsg.style.display = "none";
        }, 2000);
    }).catch(err => {
        console.log('Something went wrong', err);
    });
}
