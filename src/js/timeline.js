/*=========================================================
  TIMELINE.JS
  Controle da Timeline PlayStation
=========================================================*/

class Timeline {
    constructor() {
        this.currentIndex = 0;
        this.buttons = document.querySelectorAll(".timeline .console");
        this.line = document.querySelector(".timeline .line");
        this.init();
    }

    init() {
        this.buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                this.changeConsole(index);
            });
        });

        // Inicializa a linha
        this.updateProgress();
    }

    changeConsole(index) {
        if (index === this.currentIndex) return;

        this.currentIndex = index;
        this.updateActiveButton();
        this.updateProgress();

        // Atualiza Hero
        if (typeof Hero !== 'undefined') {
            Hero.load(index);
        }

        // Atualiza Cards
        if (typeof Cards !== 'undefined') {
            Cards.load(index);
        }

        // Atualiza Áudio
        if (typeof audioPlayer !== 'undefined' && consoles[index]) {
            try {
                audioPlayer.change(consoles[index]);
            } catch (e) {
                // Áudio não encontrado
            }
        }
    }

    updateActiveButton() {
        this.buttons.forEach(btn => {
            btn.classList.remove("active");
        });
        if (this.buttons[this.currentIndex]) {
            this.buttons[this.currentIndex].classList.add("active");
        }
    }

    updateProgress() {
        if (!this.line) return;
        const percent = (this.currentIndex / (this.buttons.length - 1)) * 100;
        this.line.style.setProperty("--progress", `${percent}%`);
    }
}

// Inicializa a timeline
const timeline = new Timeline();