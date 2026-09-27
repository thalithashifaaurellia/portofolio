// ========================================
// SCRIPT.JS - PORTOFOLIO THALITHA
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // 1. SMOOTH SCROLL NAVBAR
    // ========================================

    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            // Pastikan link menuju section
            if (targetId && targetId.startsWith("#")) {
                event.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });


    // ========================================
    // 2. TOMBOL "LIHAT PROJECT"
    // ========================================

    const projectButton = document.querySelector(
        '.hero .button[href="project"]'
    );

    if (projectButton) {
        projectButton.addEventListener("click", function (event) {
            event.preventDefault();

            const projectSection = document.querySelector("#project");

            if (projectSection) {
                projectSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }


    // ========================================
    // 3. EFEK NAVBAR SAAT SCROLL
    // ========================================

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)";
        } else {
            header.style.boxShadow = "none";
        }

    });


    // ========================================
    // 4. MENANDAI MENU YANG SEDANG AKTIF
    // ========================================

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        menuLinks.forEach(function (link) {

            link.style.color = "#374151";

            if (link.getAttribute("href") === "#" + currentSection) {
                link.style.color = "#ff06ac";
            }

        });

    });


    // ========================================
    // 5. ANIMASI SKILL CARD
    // ========================================

    const skills = document.querySelectorAll(".skill");

    const skillObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.2
        }
    );


    skills.forEach(function (skill) {

        skill.style.opacity = "0";
        skill.style.transform = "translateY(30px)";
        skill.style.transition = "all 0.6s ease";

        skillObserver.observe(skill);

    });


    // ========================================
    // 6. ANIMASI PROJECT CARD
    // ========================================

    const projects = document.querySelectorAll(".project");

    const projectObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.2
        }
    );


    projects.forEach(function (project) {

        project.style.opacity = "0";
        project.style.transform = "translateY(40px)";
        project.style.transition = "all 0.7s ease";

        projectObserver.observe(project);

    });


    // ========================================
    // 7. EFEK HOVER FOTO PROFILE
    // ========================================

    const profile = document.querySelector(".profile");

    if (profile) {

        profile.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.03)";
            this.style.transition = "0.3s ease";
        });

        profile.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });

    }


    // ========================================
    // 8. TAHUN OTOMATIS PADA FOOTER
    // ========================================

    const footerText = document.querySelector("footer p");

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.innerHTML =
            "© " + currentYear + " Orell Cantik.";

    }


    // ========================================
    // 9. PESAN SAAT TOMBOL KONTAK DIKLIK
    // ========================================

    const contactButton = document.querySelector(
        '.contact-box .button'
    );

    if (contactButton) {

        contactButton.addEventListener("click", function () {

            console.log(
                "Tombol Hubungi Saya diklik."
            );

        });

    }


    // ========================================
    // 10. PESAN DI CONSOLE
    // ========================================

    console.log(
        "Portfolio Thalitha Shifa Aurellia berhasil dimuat."
    );

});
```
