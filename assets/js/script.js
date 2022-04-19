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

// AOS
AOS.init();

// GSAP
gsap.from('.jumbotron img', { duration: 1, y: -100, opacity: 0, ease: 'bounce'});
gsap.from('.navbar', { duration: 1.5, y: '-100%', opacity: 0, ease: 'bounce'});
gsap.from('.display-4', { duration: 1.5, x: -50, opacity: 0, delay: 0.5, ease: 'back'});