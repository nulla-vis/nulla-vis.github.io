const typed = new Typed('#elements', {
    strings: ['Web Developer', 'Back-End Developer', 'Self-taugh Developer', 'Japanese Speaker'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});


const btns = $(".nav-link, .navbar-brand");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");

        current[0].className = current[0].className.replace(" active", "");

        if(this.className == "navbar-brand"){
            $(".nav-link")[0].className += " active";
        }else{
            this.className += " active";
        }

    });
}