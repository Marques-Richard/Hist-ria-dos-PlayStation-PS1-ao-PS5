/*=========================================================
  SEARCH.JS
  Sistema de Busca e Filtros
=========================================================*/

class Search {

    static currentGames = [];

    static init() {

        this.searchInput = document.querySelector("#searchGame");
        this.genreFilter = document.querySelector("#genreFilter");
        this.sortFilter = document.querySelector("#sortGames");

        if (this.searchInput) {
            this.searchInput.addEventListener("input", () => this.applyFilters());
        }

        if (this.genreFilter) {
            this.genreFilter.addEventListener("change", () => this.applyFilters());
        }

        if (this.sortFilter) {
            this.sortFilter.addEventListener("change", () => this.applyFilters());
        }

    }

    static setGames(games) {

        this.currentGames = [...games];

        this.applyFilters();

    }

    static applyFilters() {

        let filtered = [...this.currentGames];

        /*==============================
        BUSCA POR NOME
        ==============================*/

        if (this.searchInput) {

            const text = this.searchInput.value
                .trim()
                .toLowerCase();

            if (text !== "") {

                filtered = filtered.filter(game =>
                    game.nome.toLowerCase().includes(text)
                );

            }

        }

        /*==============================
        FILTRO POR GÊNERO
        ==============================*/

        if (this.genreFilter) {

            const genre = this.genreFilter.value;

            if (genre !== "todos") {

                filtered = filtered.filter(game =>
                    game.genero === genre
                );

            }

        }

        /*==============================
        ORDENAÇÃO
        ==============================*/

        if (this.sortFilter) {

            switch (this.sortFilter.value) {

                case "ano":

                    filtered.sort((a, b) => b.ano - a.ano);

                    break;

                case "nota":

                    filtered.sort((a, b) => b.nota - a.nota);

                    break;

                case "nome":

                default:

                    filtered.sort((a, b) =>
                        a.nome.localeCompare(b.nome)
                    );

            }

        }

        /*==============================
        ATUALIZA CARDS
        ==============================*/

        if (typeof Cards !== "undefined") {

            Cards.render(filtered);

        }

    }

}