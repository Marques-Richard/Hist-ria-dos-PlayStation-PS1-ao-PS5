/*=========================================================
  CARDS.JS
  Geração dinâmica dos jogos
=========================================================*/

class Cards {
    static load(index) {
        const container = document.querySelector(".games-grid");
        if (!container) {
            console.error("Container .games-grid não encontrado");
            return;
        }

        // Verifica se consoles e jogos existem
        if (typeof consoles === 'undefined' || !consoles[index] || !consoles[index].jogos) {
            console.error(`Dados de jogos não encontrados para o índice: ${index}`);
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; color: var(--gray-dark); padding: 40px;">
                    <i class="fa-solid fa-gamepad" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                    <p>Nenhum jogo disponível para este console.</p>
                </div>
            `;
            return;
        }

        const games = consoles[index].jogos;

        // Se não houver jogos
        if (!games.length) {
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; color: var(--gray-dark); padding: 40px;">
                    <p>Nenhum jogo cadastrado para este console.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = "";
        games.forEach((game, gameIndex) => {
            const card = this.createCard(game, gameIndex);
            container.appendChild(card);
        });
    }

    static createCard(game, index) {
        const card = document.createElement("article");
        card.className = "game-card";
        card.style.animationDelay = `${index * 0.12}s`;

        // Verifica se a imagem existe
        const imgSrc = game.imagem || 'src/assets/placeholder-game.webp';

        card.innerHTML = `
            <div class="game-image">
                <img
                    src="${imgSrc}"
                    alt="${game.nome || 'Jogo'}"
                    loading="lazy"
                    onerror="this.src='src/assets/placeholder-game.webp'"
                >
            </div>
            <div class="game-content">
                <span class="game-year">${game.ano || '—'}</span>
                <h3>${game.nome || 'Sem título'}</h3>
                <p class="game-genre">${game.genero || 'Gênero desconhecido'}</p>
                <div class="game-footer">
                    <span class="game-rating">⭐ ${game.nota || '—'}</span>
                    <button class="game-button" data-id="${index}">
                        Ver detalhes
                    </button>
                </div>
            </div>
        `;

        const button = card.querySelector(".game-button");
        if (button) {
            button.addEventListener("click", () => {
                if (typeof Modal !== 'undefined') {
                    Modal.open(game);
                } else {
                    alert(`🎮 ${game.nome}\nAno: ${game.ano}\nGênero: ${game.genero}\nNota: ${game.nota}`);
                }
            });
        }

        return card;
    }
}