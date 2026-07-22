/*=========================================================
  AUDIO.JS
  Controle de áudio do console
=========================================================*/

class AudioPlayer {
    constructor() {
        this.audio = new Audio();
        this.audio.loop = false;
        this.audio.volume = 0.3;
        this.isPlaying = false;
        this.currentSrc = null;
    }

    load(src) {
        if (!src) {
            console.log("ℹ️ Nenhum arquivo de áudio fornecido");
            return;
        }
        
        if (this.currentSrc !== src) {
            this.audio.src = src;
            this.currentSrc = src;
            this.audio.load();
        }
    }

    play() {
        if (!this.audio.src) return;
        
        this.audio.play()
            .then(() => {
                this.isPlaying = true;
                this.updatePlayerUI(true);
            })
            .catch(() => {
                console.log("ℹ️ Áudio não pôde ser reproduzido (arquivo não encontrado ou bloqueado)");
                this.isPlaying = false;
                this.updatePlayerUI(false);
            });
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updatePlayerUI(false);
    }

    toggle() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    change(consoleData) {
        if (!consoleData || !consoleData.music) {
            console.log("ℹ️ Console sem música definida");
            return;
        }

        this.load(consoleData.music);
        
        // Pequeno delay para carregar o áudio
        setTimeout(() => {
            this.play();
        }, 300);
    }

    updatePlayerUI(playing) {
        const icon = document.querySelector(".music-player i");
        if (icon) {
            icon.className = playing ? "fa-solid fa-volume-high" : "fa-solid fa-music";
        }
        
        const status = document.querySelector(".music-player p");
        if (status) {
            status.textContent = playing ? "▶ Reproduzindo" : "⏸ Pausado";
        }
    }
}

// Inicializa o player
const audioPlayer = new AudioPlayer();

// Toggle no clique
document.addEventListener("DOMContentLoaded", () => {
    const player = document.querySelector(".music-player");
    if (player) {
        player.addEventListener("click", () => {
            audioPlayer.toggle();
        });
    }
});