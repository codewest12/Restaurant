// =====================================
// PONDICHERI RESTAURANT WEBSITE
// app.js
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MOBILE NAVIGATION
    // =========================

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

    // =========================
    // ACTIVE PAGE HIGHLIGHT
    // =========================

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }

    });

    // =========================
    // SMOOTH SCROLLING
    // =========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target =
                document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    // =========================
    // HEADER SCROLL EFFECT
    // =========================

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }

    // =========================
    // RESERVATION FORM
    // =========================

    const reservationForm =
        document.getElementById("reservationForm");

    if (reservationForm) {

        reservationForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const fullname =
                document.getElementById("fullname")?.value.trim() || "";

            const phone =
                document.getElementById("phone")?.value.trim() || "";

            const email =
                document.getElementById("email")?.value.trim() || "";

            const date =
                document.getElementById("date")?.value || "";

            const time =
                document.getElementById("time")?.value || "";

            const guests =
                document.getElementById("guests")?.value || "";

            const occasion =
                document.getElementById("occasion")?.value || "";

            const message =
                document.getElementById("message")?.value.trim() || "";

            if (
                !fullname ||
                !phone ||
                !email ||
                !date ||
                !time ||
                !guests
            ) {

                alert(
                    "Please complete all required reservation fields."
                );

                return;
            }

            const text =
`Hello Pondicheri Restaurant,

I would like to reserve a table.

Name: ${fullname}
Phone: ${phone}
Email: ${email}

Reservation Date: ${date}
Reservation Time: ${time}

Guests: ${guests}
Occasion: ${occasion}

Special Requests:
${message}

Please confirm availability.

Thank you.`;

            const whatsappURL =
                `https://wa.me/2349068008000?text=${encodeURIComponent(text)}`;

            window.open(whatsappURL, "_blank");

        });

    }

    // =========================
    // CONTACT FORM
    // =========================

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                document.getElementById("contactName")?.value.trim() || "";

            const phone =
                document.getElementById("contactPhone")?.value.trim() || "";

            const email =
                document.getElementById("contactEmail")?.value.trim() || "";

            const subject =
                document.getElementById("contactSubject")?.value || "";

            const message =
                document.getElementById("contactMessage")?.value.trim() || "";

            if (
                !name ||
                !phone ||
                !email ||
                !subject ||
                !message
            ) {

                alert(
                    "Please complete all required contact fields."
                );

                return;
            }

            const text =
`Hello Pondicheri Restaurant,

New Website Contact Message

Name: ${name}
Phone: ${phone}
Email: ${email}

Subject:
${subject}

Message:
${message}

Please get back to me.

Thank you.`;

            const whatsappURL =
                `https://wa.me/2349068008000?text=${encodeURIComponent(text)}`;

            window.open(whatsappURL, "_blank");

        });

    }

    // =========================
    // GALLERY LIGHTBOX
    // =========================

    const galleryImages =
        document.querySelectorAll(".gallery-item img");

    if (galleryImages.length > 0) {

        const lightbox =
            document.createElement("div");

        lightbox.id = "lightbox";

        lightbox.innerHTML =
            '<img id="lightbox-image" alt="Gallery Image">';

        document.body.appendChild(lightbox);

        const lightboxImage =
            document.getElementById("lightbox-image");

        galleryImages.forEach(image => {

            image.style.cursor = "pointer";

            image.addEventListener("click", () => {

                lightbox.classList.add("active");

                lightboxImage.src = image.src;

            });

        });

        lightbox.addEventListener("click", () => {

            lightbox.classList.remove("active");

        });

    }

    // =========================
    // SIMPLE FADE-IN ANIMATION
    // =========================

    const animatedElements =
        document.querySelectorAll(
            ".card, .menu-card, .gallery-item, .feature-card, .policy-card"
        );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.2
        });

        animatedElements.forEach(item => {

            item.classList.add("fade-element");

            observer.observe(item);

        });

    }

});