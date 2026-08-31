/**
 * PORTFÓLIO DEV - MAIN.JS
 * 
 * Arquitetura modular:
 * - IIFE para evitar poluição do escopo global
 * - Funções separadas por responsabilidade
 * - Inicialização centralizada
 */

(function() {
  'use strict';

  // ============================================================
  // 1. NAVEGAÇÃO MOBILE (Hamburger menu)
  // ============================================================
  const MobileNav = {
    init: function() {
      const toggleBtn = document.querySelector('.menu-toggle');
      const navMenu = document.querySelector('.nav-menu');
      
      if (!toggleBtn || !navMenu) return;

      toggleBtn.addEventListener('click', function() {
        navMenu.classList.toggle('menu-open');
        const icon = toggleBtn.querySelector('i');
        
        if (navMenu.classList.contains('menu-open')) {
          icon.classList.remove('ri-menu-line');
          icon.classList.add('ri-close-line');
          // Adiciona estilos inline para o menu mobile
          navMenu.style.display = 'flex';
          navMenu.style.flexDirection = 'column';
          navMenu.style.position = 'absolute';
          navMenu.style.top = '100%';
          navMenu.style.left = '0';
          navMenu.style.right = '0';
          navMenu.style.backgroundColor = 'var(--card)';
          navMenu.style.padding = '20px';
          navMenu.style.borderBottom = '1px solid var(--border)';
          navMenu.style.gap = '16px';
        } else {
          icon.classList.remove('ri-close-line');
          icon.classList.add('ri-menu-line');
          navMenu.removeAttribute('style');
        }
      });

      // Fecha o menu ao clicar em um link
      navMenu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          if (navMenu.classList.contains('menu-open')) {
            toggleBtn.click();
          }
        });
      });
    }
  };


  // ============================================================
  // 2. SCROLL SUAVE E DESTAQUE NO MENU
  // ============================================================
  const SmoothScroll = {
    init: function() {
      document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    }
  };


  // ============================================================
  // 3. NAVBAR - Efeito ao rolar a página
  // ============================================================
  const NavbarScroll = {
    init: function() {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;

      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
          navbar.style.boxShadow = 'none';
        }
      });
    }
  };


  // ============================================================
  // 4. REVEAL ANIMATION - Elementos aparecem ao rolar
  // ============================================================
  const ScrollReveal = {
    options: {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    },

    init: function() {
      // Verifica se o IntersectionObserver está disponível
      if (!('IntersectionObserver' in window)) {
        this.fallback();
        return;
      }

      const observer = new IntersectionObserver(
        this.handleIntersect.bind(this),
        this.options
      );

      // Observa seções e cards principais
      const elements = document.querySelectorAll(
        '.section-header, .skill-card, .project-card, .timeline-item, .stats-card, .about-text, .contact-card'
      );

      elements.forEach(function(el) {
        el.classList.add('reveal-hidden');
        observer.observe(el);
      });
    },

    handleIntersect: function(entries, observer) {
      entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          setTimeout(function() {
            entry.target.classList.add('reveal-visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    },

    fallback: function() {
      // Fallback para navegadores antigos
      document.querySelectorAll('.reveal-hidden').forEach(function(el) {
        el.classList.add('reveal-visible');
      });
    }
  };


  // ============================================================
  // 5. ANO ATUAL NO FOOTER (atualiza automaticamente)
  // ============================================================
  const DynamicYear = {
    init: function() {
      const yearElement = document.querySelector('.footer-content p:first-child');
      if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2026', currentYear);
      }
    }
  };


  // ============================================================
  // 6. FORMULÁRIO DE CONTATO (estrutura pronta para integração)
  // ============================================================
  const ContactForm = {
    init: function() {
      // Placeholder para futura integração com backend
      // Exemplo de como adicionar um formulário:
      // 
      // const form = document.querySelector('#contact-form');
      // if (form) {
      //   form.addEventListener('submit', this.handleSubmit.bind(this));
      // }
    },

    handleSubmit: function(e) {
      e.preventDefault();
      // Lógica de envio do formulário aqui
      console.log('Formulário enviado');
    }
  };


  // ============================================================
  // 7. UTILITÁRIOS GERAIS
  // ============================================================
  const Utils = {
    // Debounce para eventos de scroll/resize
    debounce: function(func, wait) {
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

    // Log de inicialização (apenas em desenvolvimento)
    log: function(message) {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('[Portfolio]', message);
      }
    }
  };


  // ============================================================
  // INICIALIZAÇÃO CENTRALIZADA
  // ============================================================
  const App = {
    init: function() {
      Utils.log('Inicializando portfólio...');

      MobileNav.init();
      SmoothScroll.init();
      NavbarScroll.init();
      ScrollReveal.init();
      DynamicYear.init();
      ContactForm.init();

      // Adiciona classe de carregamento completo
      document.body.classList.add('app-loaded');
      
      Utils.log('Portfólio carregado com sucesso!');
    }
  };


  // ============================================================
  // CSS para as animações de reveal (injetado dinamicamente)
  // ============================================================
  const style = document.createElement('style');
  style.textContent = `
    .reveal-hidden {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .reveal-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .app-loaded {
      animation: none;
    }
  `;
  document.head.appendChild(style);


  // ============================================================
  // BOOTSTRAP - Inicia quando o DOM estiver pronto
  // ============================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', App.init);
  } else {
    App.init();
  }

})();
