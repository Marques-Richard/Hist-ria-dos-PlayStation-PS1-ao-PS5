/*=========================================================
  ANIMATIONS.JS
  Efeitos Cinematográficos
=========================================================*/

class Animations {
    static init() {
        this.scrollReveal();
        this.mouseParallax();
        this.cards3D();
    }

    /* Scroll Reveal */
    static scrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        document.querySelectorAll(".reveal").forEach(section => {
            observer.observe(section);
        });
    }

    /* Parallax no Hero */
    static mouseParallax() {
        const hero = document.querySelector(".hero");
        if (!hero) return;

        hero.addEventListener("mousemove", (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 45;
            const y = (window.innerHeight / 2 - e.clientY) / 45;
            const image = hero.querySelector(".hero-console");

            if (image) {
                image.style.transform = `translate(${x}px, ${y}px) rotateY(${-x}deg)`;
            }
        });

        hero.addEventListener("mouseleave", () => {
            const image = hero.querySelector(".hero-console");
            if (image) {
                image.style.transform = "";
            }
        });
    }

    /* Efeito 3D nos Cards */
    static cards3D() {
        document.addEventListener("mousemove", (e) => {
            document.querySelectorAll(".game-card").forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
                    const rotateY = ((x / rect.width) - 0.5) * 16;
                    const rotateX = -((y / rect.height) - 0.5) * 16;
                    card.style.transform = `
                        perspective(1000px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        scale(1.04)
                    `;
                }
            });
        });

        document.querySelectorAll(".game-card").forEach(card => {
            card.addEventListener("mouseleave", () => {
                card.style.transform = "";
            });
        });
    }
}