/*=========================================================
  MODAL.JS
  Modal de detalhes do jogo
=========================================================*/

class Modal {
    static init() {
        this.modal = document.querySelector(".modal");
        this.overlay = document.querySelector(".modal-overlay");
        this.closeBtn = document.querySelector(".modal-close");

        if (!this.modal || !this.overlay || !this.closeBtn) {
            console.error("Elementos do modal não encontrados");
            return;
        }

        this.closeBtn.addEventListener("click", () => this.close());
        this.overlay.addEventListener("click", () => this.close());

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.close();
            }
        });
    }

    static open(game) {
        if (!game) return;

        const title = document.querySelector(".modal-title");
        const year = document.querySelector(".modal-year");
        const genre = document.querySelector(".modal-genre");
        const rating = document.querySelector(".modal-rating");
        const description = document.querySelector(".modal-description");
        const image = document.querySelector(".modal-image");

        if (title) title.textContent = game.nome || 'Sem título';
        if (year) year.textContent = game.ano || '—';
        if (genre) genre.textContent = game.genero || 'Gênero desconhecido';
        if (rating) rating.textContent = game.nota || '—';
        if (description) description.textContent = game.descricao || 'Sem descrição disponível.';

        if (image) {
            image.src = game.imagem || 'src/assets/placeholder-game.webp';
            image.alt = game.nome || 'Jogo';
            image.onerror = function() {
                this.src = 'src/assets/placeholder-game.webp';
            };
        }

        this.modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    static close() {
        if (this.modal) {
            this.modal.classList.remove("active");
        }
        document.body.style.overflow = "";
    }
}

// Inicializa quando o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
    Modal.init();
});