/*=========================================================
  APP.JS
  Inicialização da aplicação
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("🎮 História do PlayStation - Iniciado com sucesso!");

    // Verifica se os dados existem
    if (typeof consoles === 'undefined' || !consoles.length) {
        console.error("❌ Dados dos consoles não carregados!");
        return;
    }

    console.log(`✅ ${consoles.length} consoles carregados`);

    // Inicializa o Modal
    if (typeof Modal !== 'undefined') {
        Modal.init();
        console.log("✅ Modal inicializado");
    }

    // Carrega Hero inicial
    if (typeof Hero !== 'undefined') {
        Hero.load(0);
        console.log("✅ Hero inicial carregado");
    }

    // Carrega Cards iniciais
    if (typeof Cards !== 'undefined') {
        Cards.load(0);
        console.log("✅ Cards iniciais carregados");
    }

    // Inicializa Timeline
    if (typeof timeline !== 'undefined') {
        setTimeout(() => {
            timeline.updateActiveButton();
            timeline.updateProgress();
        }, 100);
        console.log("✅ Timeline inicializada");
    }

    // Inicializa Música
    if (typeof audioPlayer !== 'undefined' && consoles[0]) {
        try {
            audioPlayer.change(consoles[0]);
            console.log("✅ Áudio inicializado");
        } catch (e) {
            console.log("ℹ️ Áudio não disponível (arquivo não encontrado)");
        }
    }

    // Inicializa Animações
    if (typeof Animations !== 'undefined') {
        setTimeout(() => {
            Animations.init();
        }, 300);
        console.log("✅ Animações inicializadas");
    }

    // Adiciona overlay do menu mobile
    addMobileMenu();
});

/*=============================
  MENU MOBILE
=============================*/
function addMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    // Botão hamburger
    const topbar = document.querySelector('.topbar');
    if (topbar) {
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger-btn';
        hamburger.innerHTML = `
    <img src="./src/assets/logos/logo-ps1.png" alt="Menu">
`;
        hamburger.style.cssText = `
            display: none;
            background: rgba(255,255,255,.05);
            border: 1px solid rgba(255,255,255,.08);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: #fff;
            font-size: 1.2rem;
            transition: .35s;
        `;
        hamburger.addEventListener('mouseenter', () => {
            hamburger.style.background = 'rgba(0,112,255,.18)';
        });
        hamburger.addEventListener('mouseleave', () => {
            hamburger.style.background = 'rgba(255,255,255,.05)';
        });

        // Mostrar apenas em mobile
        const showHamburger = () => {
            if (window.innerWidth <= 768) {
                hamburger.style.display = 'flex';
                hamburger.style.alignItems = 'center';
                hamburger.style.justifyContent = 'center';
            } else {
                hamburger.style.display = 'none';
            }
        };

        showHamburger();
        window.addEventListener('resize', showHamburger);

        const topbarLeft = topbar.querySelector('.timeline');
        if (topbarLeft) {
            topbarLeft.style.display = 'flex';
            topbarLeft.style.alignItems = 'center';
            topbarLeft.style.gap = '15px';
            topbarLeft.prepend(hamburger);
        }

        // Eventos do menu
        hamburger.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}