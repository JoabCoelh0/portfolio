# 🚀 Portfólio de Desenvolvedor

Portfólio profissional moderno, responsivo e com arquitetura limpa.

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html              # Página principal - estrutura HTML semântica
├── css/
│   └── style.css           # Estilos organizados por seção e tema
├── js/
│   └── main.js             # Lógica e interações (modular e comentado)
├── assets/                 # Imagens, ícones e outros recursos estáticos
└── README.md               # Este arquivo
```

## 🎨 Arquitetura CSS

O `style.css` está organizado em seções lógicas:

1. **Variáveis CSS** — Tema centralizado (cores, espaçamentos, fontes, sombras)
2. **Reset & Base** — Normalização e estilos base
3. **Utilitários** — Botões, tags, gradientes reutilizáveis
4. **Layout** — Container, grid e espaçamento de seções
5. **Componentes** — Cada seção tem seu próprio bloco CSS
6. **Animações** — Keyframes e transições
7. **Responsividade** — Breakpoints para tablet e mobile

Para mudar o tema, basta alterar as variáveis no bloco `:root` no topo do CSS.

## ⚙️ Arquitetura JavaScript

O `main.js` usa **IIFE** para evitar poluição do escopo global e está organizado em módulos:

- `MobileNav` — Menu hamburger para mobile
- `SmoothScroll` — Scroll suave entre seções
- `NavbarScroll` — Efeito na navbar ao rolar
- `ScrollReveal` — Animações ao rolar a página (IntersectionObserver)
- `DynamicYear` — Ano automático no footer
- `ContactForm` — Estrutura pronta para integração
- `Utils` — Funções auxiliares (debounce, log)
- `App` — Inicializador centralizado
