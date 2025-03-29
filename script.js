document.addEventListener("DOMContentLoaded", function () { 
    const nav = document.querySelector(".nav-container");
    const menu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });

    nav.insertBefore(menuToggle, nav.firstChild);

   
    function checkScreenSize() {
        if (window.innerWidth < 768) {
            menu.style.display = "none";
            menuToggle.style.display = "block";
        } else {
            menu.style.display = "flex";
            menuToggle.style.display = "none";
        }
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

   
    const fadeElements = document.querySelectorAll(".fade-in");
    function checkFade() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    }

    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    window.addEventListener("scroll", checkFade);
    checkFade();

    
    let lastScrollTop = 0;
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = "-80px";
        } else {
            header.style.top = "0";
        }
        lastScrollTop = scrollTop;
    });

});