/*=========================================================
  UTILS.JS
  Funções utilitárias
=========================================================*/

const Utils = {
    // Seletores
    qs(selector) {
        return document.querySelector(selector);
    },

    qsa(selector) {
        return [...document.querySelectorAll(selector)];
    },

    // Criação de elementos
    create(tag, className = "") {
        const element = document.createElement(tag);
        if (className) {
            element.className = className;
        }
        return element;
    },

    // Pré-carregamento de imagem
    preloadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
        });
    },

    // Efeitos de fade
    fadeOut(element, duration = 300) {
        element.style.transition = `opacity ${duration}ms ease`;
        element.style.opacity = 0;
        return new Promise(resolve => {
            setTimeout(resolve, duration);
        });
    },

    fadeIn(element, duration = 300) {
        element.style.transition = `opacity ${duration}ms ease`;
        element.style.opacity = 1;
        return new Promise(resolve => {
            setTimeout(resolve, duration);
        });
    },

    // Utilitários matemáticos
    clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    },

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Formatação
    formatNumber(num) {
        return new Intl.NumberFormat('pt-BR').format(num);
    },

    // Debounce
    debounce(func, wait = 300) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Verifica se o elemento está visível
    isVisible(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}