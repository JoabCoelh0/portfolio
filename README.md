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

## 🛠️ Como Personalizar

### 1. Dados pessoais
Edite o `index.html` e procure por:
- `Seu Nome` — Seu nome completo
- `seuemail@email.com` — Seu email
- `(11) 99999-9999` — Seu telefone
- `São Paulo, Brasil` — Sua localização
- `href="#"` nos links sociais — Substitua pelos seus URLs reais

### 2. Cores do tema
No arquivo `css/style.css`, altere as variáveis no bloco `:root`:
```css
--accent: #7aac2b;    /* Cor principal */
--accent2: #c4a87c;   /* Cor secundária */
--bg: #1f1f21;        /* Fundo */
```

### 3. Fonte
Atualmente usando **Syne** do Google Fonts. Para mudar:
1. Altere a tag `<link>` no `<head>` do `index.html`
2. Atualize `--font-family` no CSS

### 4. Tecnologias
Edite as `.tag` dentro de `.skill-tags` no HTML.

### 5. Projetos
Edite os `.project-card` — cada um tem thumbnail, título, descrição e links.

### 6. Experiência
Edite os `.timeline-item` na seção de experiência.

## 🚀 Como Rodar

### Opção 1: Abrir diretamente
Basta dar **duplo clique** no arquivo `index.html` — abre em qualquer navegador.

### Opção 2: Servidor local (recomendado)
```bash
# Python 3
python3 -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

Depois acesse `http://localhost:8000`

## 📱 Responsividade
- **Desktop** (> 1024px) — Layout completo
- **Tablet** (768px - 1024px) — Ajustes de tipografia
- **Mobile** (< 768px) — Menu hamburger, layout em coluna
- **Mobile pequeno** (< 480px) — Botões full-width, grids em 1 coluna

## ✨ Recursos

- ✅ Navegação sticky com efeito glassmorphism
- ✅ Scroll suave entre seções
- ✅ Animações de entrada ao rolar
- ✅ Menu mobile responsivo
- ✅ Ano automático no footer
- ✅ Efeitos hover em todos os elementos interativos
- ✅ Badges animados
- ✅ Acessibilidade (semântica HTML, foco em teclado)
- ✅ Zero dependências externas além de fontes e ícones CDN

## 📝 Próximos passos (opcional)

- [ ] Adicionar foto real na seção hero (substitua o `<i>` por `<img>`)
- [ ] Integrar formulário de contato com EmailJS ou backend
- [ ] Adicionar mais projetos ao grid
- [ ] Criar página de detalhes para cada projeto
- [ ] Adicionar blog ou seção de artigos
- [ ] Implementar modo claro/escuro
- [ ] Adicionar página de currículo para download em PDF

---

**Feito com ❤️ e arquitetura limpa**
