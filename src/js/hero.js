/*=========================================================
  HERO.JS
  Atualiza toda a Hero Section
=========================================================*/

class Hero {
    static load(index) {
        const consoleData = consoles[index];
        if (!consoleData) {
            console.error(`Console ${index} não encontrado`);
            return;
        }

        this.updateTitle(consoleData);
        this.updateDescription(consoleData);
        this.updateHardware(consoleData);
        this.updateStats(consoleData);
        this.updateImage(consoleData);
        this.updateBackground(consoleData);
        this.updateColors(consoleData);
        this.animate();
    }

    static updateTitle(data) {
        const title = document.querySelector(".hero-title");
        const year = document.querySelector(".hero-year");
        const slogan = document.querySelector(".hero-slogan");

        if (title) title.textContent = data.nome;
        if (year) year.textContent = data.ano;
        if (slogan) slogan.textContent = data.slogan;
    }

    static updateDescription(data) {
        const desc = document.querySelector(".hero-description");
        if (desc) desc.textContent = data.descricao;
    }

    static updateHardware(data) {
        const cpu = document.querySelector(".spec-value.cpu");
        const gpu = document.querySelector(".spec-value.gpu");
        const memory = document.querySelector(".spec-value.memory");
        const storage = document.querySelector(".spec-value.storage");

        if (cpu && data.hardware.cpu) cpu.textContent = data.hardware.cpu;
        if (gpu && data.hardware.gpu) gpu.textContent = data.hardware.gpu;
        if (memory && data.hardware.memoria) memory.textContent = data.hardware.memoria;
        if (storage && data.hardware.armazenamento) storage.textContent = data.hardware.armazenamento;
    }

    static updateStats(data) {
        const cards = document.querySelectorAll(".card h3");
        const cardLabels = document.querySelectorAll(".card p");

        if (cards.length >= 4) {
            cards[0].textContent = data.vendas || "—";
            cards[1].textContent = data.hardware?.memoria || "—";
            cards[2].textContent = "CD-ROM";
            cards[3].textContent = data.ano;
        }
    }

    static updateImage(data) {
        const image = document.querySelector(".hero-console");
        if (image) {
            image.src = data.heroImage;
            image.alt = data.nome;
        }
    }

    static updateBackground(data) {
        document.body.style.setProperty(
            "--hero-background",
            `url(${data.background})`
        );
    }

    static updateColors(data) {
        if (data.cor) {
            document.documentElement.style.setProperty("--primary", data.cor);
        }
    }

    static animate() {
        const hero = document.querySelector(".hero");
        if (hero) {
            hero.classList.remove("hero-show");
            void hero.offsetWidth;
            hero.classList.add("hero-show");
        }
    }
}