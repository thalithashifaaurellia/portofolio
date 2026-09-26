document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       SMOOTH SCROLL
    ============================== */
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    /* ==============================
       ACTIVE NAVIGATION
    ============================== */
    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();

    /* ==============================
       CARD REVEAL ANIMATION
    ============================== */
    const cards = document.querySelectorAll(".card");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        cards.forEach(function (card) {
            observer.observe(card);
        });
    } else {
        cards.forEach(function (card) {
            card.classList.add("show");
        });
    }

    /* ==============================
       BUTTON FEEDBACK
    ============================== */
    const portfolioButton = document.querySelector(".hero .btn");

    if (portfolioButton) {
        portfolioButton.addEventListener("click", function () {
            this.style.transform = "scale(0.97)";

            setTimeout(function () {
                portfolioButton.style.transform = "";
            }, 150);
        });
    }

    /* ==============================
       AUTO UPDATE COPYRIGHT YEAR
    ============================== */
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.innerHTML = footerText.innerHTML.replace(
            /©\s*\d{4}/,
            "© " + new Date().getFullYear()
        );
    }

    /* ==============================
       IMAGE FALLBACK
    ============================== */
    const images = document.querySelectorAll(".card img");

    images.forEach(function (image) {
        image.addEventListener("error", function () {
            this.style.display = "none";
        });
    });
});
