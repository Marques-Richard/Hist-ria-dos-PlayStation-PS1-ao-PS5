/*=========================================================
  DATA.JS
  Dados completos dos consoles PlayStation
=========================================================*/

const consoles = [
    {
        id: "ps1",
        nome: "PlayStation",
        ano: "1994",
        slogan: "Live in your world. Play in ours.",
        descricao: "O primeiro console da Sony revolucionou a indústria dos videogames utilizando mídia CD-ROM e apresentou franquias históricas como Resident Evil, Metal Gear Solid e Crash Bandicoot.",
        heroImage: "src/assets/consoles/ps1-foto01.webp",
        background: "src/assets/backgrounds/ps1.png",
        cor: "#006FCD",
        music: "src/assets/audio/ps1.mp3",
        vendas: "102M",
        hardware: {
            cpu: "MIPS R3000A 33.8 MHz",
            gpu: "33.8 MHz",
            memoria: "2 MB RAM",
            armazenamento: "Memory Card 1 MB"
        },
        jogos: [
            {
                nome: "Resident Evil 2",
                ano: 1998,
                genero: "Survival Horror",
                nota: 9.6,
                imagem: "src/assets/games/ps1/re2.webp",
                descricao: "Clássico absoluto do survival horror que revolucionou o gênero com sua narrativa em duas campanhas (Leon e Claire), inimigos icônicos como o Mr. X e uma atmosfera de tensão constante."
            },
            {
                nome: "Metal Gear Solid",
                ano: 1998,
                genero: "Stealth",
                nota: 9.8,
                imagem: "src/assets/games/ps1/mgs.webp",
                descricao: "Revolucionou o gênero stealth com sua narrativa cinematográfica, personagens memoráveis e quebra da quarta parede."
            },
            {
                nome: "Crash Bandicoot",
                ano: 1996,
                genero: "Plataforma",
                nota: 9.2,
                imagem: "src/assets/games/ps1/crash.webp",
                descricao: "O marsupial mais famoso da Sony em uma aventura cheia de ação, plataformas desafiadoras e muito humor."
            },
            {
                nome: "Gran Turismo",
                ano: 1997,
                genero: "Corrida",
                nota: 9.6,
                imagem: "src/assets/games/ps1/gt-ps1.webp",
                descricao: "O simulador de corrida que redefiniu o gênero nos consoles, com mais de 140 carros e física realista."
            }
        ]
    },
    {
        id: "ps2",
        nome: "PlayStation 2",
        ano: "2000",
        slogan: "The Beginning of a New Era",
        descricao: "O console mais vendido da história, com mais de 160 milhões de unidades. Trazendo jogos icônicos como God of War, Shadow of the Colossus e a franquia GTA.",
        heroImage: "src/assets/consoles/ps2-foto01.webp",
        background: "src/assets/backgrounds/ps2.webp",
        cor: "#006FCD",
        music: "src/assets/audio/ps2.mp3",
        vendas: "160M",
        hardware: {
            cpu: "Emotion Engine 294 MHz",
            gpu: "Graphics Synthesizer 147 MHz",
            memoria: "32 MB RAM",
            armazenamento: "Memory Card 8 MB"
        },
        jogos: [
            {
                nome: "God of War",
                ano: 2005,
                genero: "Ação",
                nota: 9.5,
                imagem: "src/assets/games/ps2/god-ps2.webp",
                descricao: "Kratos em sua jornada épica contra os deuses do Olimpo em uma história de vingança e redenção."
            },
            {
                nome: "Shadow of the Colossus",
                ano: 2005,
                genero: "Aventura",
                nota: 9.7,
                imagem: "src/assets/games/ps2/sotc-ps2.webp",
                descricao: "Uma obra-prima artística sobre amor e sacrifício, onde o jogador enfrenta 16 colossos gigantes."
            },
            {
                nome: "Grand Theft Auto: San Andreas",
                ano: 2004,
                genero: "Ação",
                nota: 9.6,
                imagem: "src/assets/games/ps2/gta-sa-ps2.webp",
                descricao: "A épica aventura de CJ em San Andreas, um dos jogos mais influentes da história dos videogames."
            },
            {
                nome: "Resident Evil 4",
                ano: 2005,
                genero: "Survival Horror",
                nota: 9.8,
                imagem: "src/assets/games/ps2/re4-ps2.webp",
                descricao: "Revolucionou a franquia ao trazer uma perspectiva em terceira pessoa sobre o ombro, combinando ação intensa com elementos de survival horror. Considerado um dos melhores jogos de todos os tempos."
            }
        ]
    },
    {
        id: "ps3",
        nome: "PlayStation 3",
        ano: "2006",
        slogan: "It only does everything.",
        descricao: "O console que trouxe a era HD, com processador Cell e jogos que definiram a geração como Uncharted, The Last of Us e Metal Gear Solid 4.",
        heroImage: "src/assets/consoles/ps3-foto01.webp",
        background: "src/assets/backgrounds/ps3.webp",
        cor: "#006FCD",
        music: "src/assets/audio/ps3.mp3",
        vendas: "87M",
        hardware: {
            cpu: "Cell Broadband Engine 3.2 GHz",
            gpu: "RSX 550 MHz",
            memoria: "256 MB XDR + 256 MB GDDR3",
            armazenamento: "20-500 GB HDD"
        },
        jogos: [
            {
                nome: "The Last of Us",
                ano: 2013,
                genero: "Ação",
                nota: 9.9,
                imagem: "src/assets/games/ps3/tlou-ps3.webp",
                descricao: "Uma obra-prima sobre sobrevivência e relacionamentos em um mundo pós-apocalíptico."
            },
            {
                nome: "Uncharted 2: Among Thieves",
                ano: 2009,
                genero: "Ação",
                nota: 9.8,
                imagem: "src/assets/games/ps3/uchathard2-ps3.webp",
                descricao: "Nathan Drake em sua maior aventura, com cenas cinematográficas e jogabilidade refinada."
            },
            {
                nome: "Resident Evil 5",
                ano: 2009,
                genero: "Ação",
                nota: 8.5,
                imagem: "src/assets/games/ps3/re5-ps3.webp",
                descricao: "Chris Redfield viaja para a África para investigar uma ameaça bioterrorista, enfrentando hordas de inimigos em uma experiência mais voltada para a ação cooperativa. Introduziu o sistema de parceria com a Sheva Alomar."
            },
            {
                nome: "Grand Theft Auto V",
                ano: 2013,
                genero: "Ação",
                nota: 9.7,
                imagem: "src/assets/games/ps3/gta-v-ps3.webp",
                descricao: "Um dos jogos mais vendidos e aclamados da história, GTA V apresenta três protagonistas (Michael, Franklin e Trevor) em uma história épica de crime e corrupção em Los Santos. Mundo aberto gigante com infinitas possibilidades."
            },
            {
                nome: "God of War III",
                ano: 2010,
                genero: "Ação",
                nota: 9.6,
                imagem: "src/assets/games/ps3/god-3-ps3.webp",
                descricao: "A conclusão épica da trilogia original de God of War. Kratos escala o Monte Olimpo para confrontar os deuses em uma batalha final e sangrenta. Gráficos impressionantes e combates contra chefes titânicos."
            },
            {
                nome: "Red Dead Redemption",
                ano: 2010,
                genero: "Ação",
                nota: 9.7,
                imagem: "src/assets/games/ps3/red-dead-redemption.jpg",
                descricao: "Um dos melhores jogos de faroeste já feitos, com John Marston em uma jornada épica pelo Velho Oeste. Combina tiro, exploração e uma história emocionante sobre redenção e família."
            },
            {
                nome: "Batman: Arkham Asylum",
                ano: 2009,
                genero: "Ação",
                nota: 9.4,
                imagem: "src/assets/games/ps3/batman-asylum-arkham.jpg",
                descricao: "Revolucionou os jogos de super-herói com seu sistema de combate fluido (Freeflow) e atmosfera sombria. Batman enfrenta seus maiores vilões no Arkham Asylum em uma noite de caos e loucura."
            },
            {
                nome: "Metal Gear Solid 4: Guns of the Patriots",
                ano: 2008,
                genero: "Stealth",
                nota: 9.5,
                imagem: "src/assets/games/ps3/metal-gear-4.jpg",
                descricao: "A conclusão épica da saga de Solid Snake, com gráficos impressionantes e uma história que amarra todas as pontas soltas da franquia. Introduziu o sistema 'Octo-Camo' e combates em cenários de guerra."
            }
        ]
    },
    {
        id: "ps4",
        nome: "PlayStation 4",
        ano: "2013",
        slogan: "Greatness Awaits.",
        descricao: "A geração que trouxe jogos inesquecíveis como God of War, Spider-Man, Horizon Zero Dawn e The Last of Us Part II.",
        heroImage: "src/assets/consoles/ps4-foto01.webp",
        background: "src/assets/backgrounds/ps4.jpg",
        cor: "#006FCD",
        music: "src/assets/audio/ps4.mp3",
        vendas: "117M",
        hardware: {
            cpu: "AMD Jaguar 1.6 GHz (8 cores)",
            gpu: "AMD Radeon 1.84 TFLOPS",
            memoria: "8 GB GDDR5",
            armazenamento: "500 GB - 1 TB HDD"
        },
        jogos: [
            {
                nome: "God of War (2018)",
                ano: 2018,
                genero: "Ação",
                nota: 9.8,
                imagem: "src/assets/games/ps4/god-2018-ps4.webp",
                descricao: "Kratos e Atreus em uma jornada emocionante através dos reinos nórdicos."
            },
            {
                nome: "Spider-Man",
                ano: 2018,
                genero: "Ação",
                nota: 9.6,
                imagem: "src/assets/games/ps4/sm-ps4.webp",
                descricao: "O melhor jogo do Homem-Aranha, com liberdade total para balançar por Nova York."
            },
            {
                nome: "Horizon Zero Dawn",
                ano: 2017,
                genero: "RPG",
                nota: 9.4,
                imagem: "src/assets/games/ps4/hzd-ps4.webp",
                descricao: "Aloy em um mundo pós-apocalíptico dominado por máquinas gigantes."
            },
            {
                nome: "Assassin's Creed Origins",
                ano: 2017,
                genero: "RPG",
                nota: 9.4,
                imagem: "src/assets/games/ps4/assassins-creed-origins.jfif",
                descricao: "O jogo que revolucionou a franquia Assassin's Creed, trazendo um enorme mundo aberto no Egito Antigo, combate reformulado e elementos de RPG. Conheça a origem da Irmandade dos Assassinos com Bayek e Aya."
            },
            {
                nome: "The Evil Within 2",
                ano: 2017,
                genero: "Survival Horror",
                nota: 8.8,
                imagem: "src/assets/games/ps4/the-evil-within-2.jpg",
                descricao: "A continuação do aclamado jogo de terror de Shinji Mikami (criador de Resident Evil). Sebastian Castellanos retorna para salvar sua filha em uma cidade distorcida chamada Union, onde a realidade é manipulada por uma inteligência artificial maligna."
            },
            {
                nome: "Metal Gear Solid V: The Phantom Pain",
                ano: 2015,
                genero: "Stealth",
                nota: 9.6,
                imagem: "src/assets/games/ps4/metal-gear-5.jpg",
                descricao: "O último jogo da franquia Metal Gear criado por Hideo Kojima. Com um mundo aberto massivo, liberdade total de abordagem e o sistema 'Fox Engine', é considerado um dos melhores jogos stealth de todos os tempos. A história de vingança de Venom Snake contra a Cipher."
            },
            {
                nome: "Resident Evil 2 Remake",
                ano: 2019,
                genero: "Survival Horror",
                nota: 9.8,
                imagem: "src/assets/games/ps4/re2-remake-ps4.webp",
                descricao: "O remake que redefiniu o padrão para refilmagens de jogos clássicos. Com gráficos impressionantes no RE Engine, jogabilidade moderna em terceira pessoa sobre o ombro e a mesma atmosfera tensa do original. Leon e Claire enfrentam o apocalipse em Raccoon City."
            }, {
                nome: "The Last of Us Part II",
                ano: 2020,
                genero: "Ação",
                nota: 9.8,
                imagem: "src/assets/games/ps4/tlou-2-ps4.webp",
                descricao: "A aguardada continuação da obra-prima da Naughty Dog. Ellie em uma jornada de vingança e sobrevivência em um mundo pós-apocalíptico. Com gráficos impressionantes, jogabilidade refinada e uma história emocionante e controversa que dividiu opiniões."
            }
        ]
    },
    {
        id: "ps5",
        nome: "PlayStation 5",
        ano: "2020",
        slogan: "Play Has No Limits.",
        descricao: "A nova geração com SSD ultra-rápido, ray tracing, DualSense revolucionário e jogos como Demon's Souls, Ratchet & Clank e Horizon Forbidden West.",
        heroImage: "src/assets/consoles/ps5-foto01.webp",
        background: "src/assets/backgrounds/ps5.jpg",
        cor: "#006FCD",
        music: "src/assets/audio/ps5.mp3",
        vendas: "50M+",
        hardware: {
            cpu: "AMD Zen 2 3.5 GHz (8 cores)",
            gpu: "AMD RDNA 2 10.28 TFLOPS",
            memoria: "16 GB GDDR6",
            armazenamento: "825 GB SSD"
        },
        jogos: [
            {
                nome: "Resident Evil 9: Requiem",
                ano: 2026,
                genero: "Survival Horror",
                nota: 9.0,
                imagem: "src/assets/games/ps5/resident-evil-requiem.webp",
                descricao: "O aguardado novo capítulo da franquia Resident Evil. Com uma nova abordagem para o survival horror, gráficos impressionantes no RE Engine e uma história que promete revolucionar a série. Detalhes ainda são escassos, mas a expectativa é de um dos maiores lançamentos da franquia."
            },
            {
                nome: "Astro Bot",
                ano: 2020,
                genero: "RPG",
                nota: 9.3,
                imagem: "src/assets/games/ps5/ab-ps5.webp",
                descricao: "O remake do clássico que deu origem ao gênero Souls-like, com gráficos impressionantes."
            },
            {
                nome: "God of War Ragnarök",
                ano: 2022,
                genero: "Ação",
                nota: 9.8,
                imagem: "src/assets/games/ps5/god-of-war-ragnarok.webp",
                descricao: "A épica conclusão da saga nórdica de Kratos e Atreus. Enfrente deuses e monstros enquanto o Ragnarök se aproxima. Com gráficos impressionantes, combate refinado e uma história emocionante sobre destino e escolhas."
            },
            {
                nome: "Gran Turismo 7",
                ano: 2021,
                genero: "Corrida",
                nota: 9.2,
                imagem: "src/assets/games/ps5/gt7.webp",
                descricao: "A aventura interdimensional com mudanças de cenário instantâneas graças ao SSD."
            },
            {
                nome: "Horizon Forbidden West",
                ano: 2022,
                genero: "RPG",
                nota: 9.5,
                imagem: "src/assets/games/ps5/hfw-ps5.webp",
                descricao: "Aloy viaja para o oeste proibido em busca de uma cura para a biosfera."
            },
            {
                nome: "Death Stranding 2: On The Beach",
                ano: 2025,
                genero: "Aventura",
                nota: 9.2,
                imagem: "src/assets/games/ps5/death-stranding-2.jpg",
                descricao: "A aguardada sequência do aclamado jogo de Hideo Kojima. Sam Porter Bridges retorna em uma nova jornada através de um mundo ainda mais misterioso e surreal. Com gráficos impressionantes no Decima Engine e uma história que promete expandir ainda mais o universo único de Death Stranding."
            },
            {
                nome: "Ghost of Yotei",
                ano: 2025,
                genero: "Ação",
                nota: 9.5,
                imagem: "src/assets/games/ps5/ghost-of-yotei.jpg",
                descricao: "A nova aventura do estúdio Sucker Punch no universo de Ghost of Tsushima. Uma nova protagonista em uma nova era, com gráficos impressionantes no PS5, combate refinado e uma história épica no Japão feudal."
            },
            {
                nome: "Silent Hill 2 Remake",
                ano: 2024,
                genero: "Survival Horror",
                nota: 9.4,
                imagem: "src/assets/games/ps5/Silent-Hill-2-Remak.webp",
                descricao: "O remake do clássico absoluto do survival horror. James Sunderland retorna à cidade de Silent Hill em busca de respostas sobre sua falecida esposa. Com gráficos modernos no Unreal Engine 5, atmosfera ainda mais imersiva e mantendo a essência psicológica do original."
            },
        ]
    }
];

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = consoles;
}