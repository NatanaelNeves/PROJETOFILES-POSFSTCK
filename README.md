# 🎬 Bolão do Oscar 2026

> Uma aplicação web interativa para votação nas principais categorias do Oscar 2026, com persistência de dados via localStorage e interface responsiva.

## 📌 Objetivo

Desenvolvida como **Trabalho Prático de Frontend (HTML + CSS + JavaScript)**, a aplicação implementa boas práticas de semântica HTML5, acessibilidade WCAG, responsividade e conteúdo dinâmico gerado via JavaScript vanilla.

**Tema:** Catálogo/Portal de votação com conteúdo dinâmico e interação do usuário.

---

## ✨ Features Principais

- 🎯 **6 Categorias de votação** (Melhor Filme, Direção, Atriz, Ator, Animação, Int'l)
- 🗳️ **Sistema de votação** com persistência em localStorage
- 🎨 **Modal interativo** para visualizar detalhes de cada candidato
- 📊 **Resumo visual** dos seus palpites em tempo real
- ♻️ **Remoção de votos** clicando novamente no candidato votado
- 🔍 **Navegação fluida** com scroll automático entre seções
- 📱 **Design responsivo** para mobile, tablet e desktop
- ♿ **Acessibilidade WCAG** com focus states, ARIA labels e semântica HTML

---

## 🎯 Requisitos Implementados

### ✅ Requisitos Funcionais (RF)

| # | Requisito | Status | Descrição |
|---|-----------|--------|-----------|
| RF01 | Estrutura de páginas | ✅ | Home → Votação, Meus Palpites, Contato (single-page com seções) |
| RF02 | Navegação funcional | ✅ | Menu sticky com estado visual, smooth scroll entre seções |
| RF03 | Conteúdo dinâmico | ✅ | Array → 30 cards dinâmicos, modal com detalhes, filtro por categoria |
| RF04 | Formulário com validação | ✅ | Email (regex), nome (min 3 chars), contagem de votos validada |
| Extra | Sistema de votação | ✅ | Votar/remover votos, localStorage, feedback visual (botão verde) |

### ✅ Requisitos Não-Funcionais (RNF)

| # | Requisito | Status | Detalhes |
|---|-----------|--------|----------|
| RNF01 | HTML Semântico | ✅ | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`, hierarquia H1→H3 |
| RNF02 | Acessibilidade WCAG | ✅ | Focus visíveis, aria-live, aria-invalid, labels, alt em imagens, contraste ≥4.5:1 |
| RNF03 | Responsividade | ✅ | 3 breakpoints: 640px (tablet), 1024px (desktop), mobile-first |
| RNF04 | Qualidade de código | ✅ | BEM CSS, funções JS claras, pasta assets/, zero frameworks |

---

## 🎨 Estrutura do Projeto

```
PROJETOFILES-POSFSTCK/
├── index.html              # Página principal (single-page)
├── css/
│   └── style.css          # Estilos (541 linhas, BEM methodology)
├── js/
│   ├── dados.js           # Array de categorias + candidatos
│   └── script.js          # Lógica (votação, validação, modal)
├── assets/
│   └── img/               # 34 imagens (diretores, atores, filmes)
└── README.md              # Este arquivo

**Total:** 30+ candidatos, 6 categorias, 100% vanilla
```

---

## 🚀 Como Usar

### Online (GitHub Pages)
👉 **[Acesse aqui](https://natanaelneves.github.io/PROJETOFILES-POSFSTCK/)**

### Localmente

1. **Clone ou faça download** do repositório
2. **Abra** `index.html` no navegador
3. **Comece a votar!** 🎬

Não precisa de servidor web (está tudo em HTML/CSS/JS puro).

---

## 💡 Como Funciona

### 1️⃣ Votação
- Clique em **"VOTAR"** no candidato
- Botão fica **verde** e diz **"✓ VOTADO"**
- Seu voto é **salvo automaticamente** no navegador

### 2️⃣ Ver Detalhes
- Clique na **imagem** do candidato
- Abre modal com foto, nome e sinopse
- Feche com **Esc**, clique no X ou fora do modal

### 3️⃣ Acompanhar Votos
- Vá em **"Meus Palpites"**
- Veja todos os seus votos em um resumo visual
- Mostra quantas categorias você completou

### 4️⃣ Enviar Bolão
- Complete **todas as 6 categorias**
- Vá em **"Contato"**
- Preencha email e nome
- Clique **"Enviar Bolão"**
- ✅ Bolão enviado com sucesso!

### 5️⃣ Remover Votos
- Clique no botão **"✓ VOTADO"** novamente
- Volta a ser **"VOTAR"** e o voto é removido

---

## 🎨 Design & Acessibilidade

### Paleta de Cores
- **Ouro:** `#ffd700` (Oscar theme)
- **Preto:** `#1a1a1a` (fundo)
- **Branco:** `#ffffff` (texto)
- **Verde:** `#10b981` (votado)
- **Vermelho:** `#ef4444` (erro)

### Responsividade
| Dispositivo | Breakpoint | Grid |
|------------|-----------|------|
| Mobile    | < 640px   | 1 coluna |
| Tablet    | 640px+    | 2 colunas |
| Desktop   | 1024px+   | 3 colunas |

### Acessibilidade
✅ **Implementado:**
- Hierarquia de títulos (H1, H2, H3)
- Focus visível em todos os botões
- ARIA labels em regiões dinâmicas
- Validação com `aria-invalid` e mensagens claras
- Modal com focus trap
- Imagens com `alt` descritivo
- Contraste de cor ≥ 4.5:1 (AA)
- Navegação por teclado (Tab, Shift+Tab, Escape)

---

## 📊 Dados do Projeto

### Categorias
1. **Melhor Filme** (10 filmes)
2. **Melhor Direção** (5 diretores)
3. **Melhor Atriz** (5 atrizes)
4. **Melhor Ator** (5 atores)
5. **Melhor Filme de Animação** (5 filmes)
6. **Melhor Filme Internacional** (5 filmes)

### Dados Dinâmicos
- **Array:** 6 categorias × 5 candidatos = 30 objetos
- **Estrutura:** `{id, nome, filme, sinopse, imagem}`
- **Armazenamento:** localStorage (`votos`)

**Exemplo:**
```javascript
{
  id: "melhor-filme",
  titulo: "Melhor Filme",
  candidatos: [
    {
      id: "101",
      nome: "Bugonia",
      filme: "Yorgos Lanthimos",
      sinopse: "Emma Stone em trama...",
      imagem: "assets/img/bugonia.webp"
    }
  ]
}
```

---

## 🔧 Tecnologias

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| HTML5 | - | Semântica, estrutura |
| CSS3 | - | Styling, Grid/Flexbox, responsividade |
| JavaScript (ES6) | - | Lógica, eventos, localStorage |
| Figma | - | (Opcional) Wireframe |

**Zero dependências externas** (vanilla stack)

---

## 📱 Testes

### Checklist de Testes Realizados

- ✅ Votação funciona e persiste ao fechar/reabrir
- ✅ Modal abre/fecha com clique e teclado (Esc)
- ✅ Formulário valida email e nome
- ✅ Mensagens de erro aparecem claras
- ✅ Botões mudam de cor (verde votado)
- ✅ Resumo atualiza em tempo real
- ✅ Smooth scroll funciona entre seções
- ✅ Layout adapta em 3 tamanhos de tela
- ✅ Navegação por teclado funciona
- ✅ Focus visível em todos os elementos

---

## 🎓 Aprendizados

Este projeto implementou:

1. **HTML Semântico** - tags corretas, hierarquia, ARIA
2. **CSS Moderno** - BEM, variáveis CSS, media queries, Grid/Flexbox
3. **JavaScript Puro** - ES6 modules, eventos, localStorage, DOM manipulation
4. **Acessibilidade** - WCAG A/AA, focus management, validação acessível
5. **Responsividade** - mobile-first, múltiplos breakpoints
6. **UX/UI** - feedback visual, estados de botão, animações suaves

---

## 👥 Personas

### Persona 1: Cinema Enthusiast (25-35 anos)
- **Objetivo:** Votar nos filmes que mais gostou
- **Comportamento:** Quer ver fotos, sinopses, não perde tempo
- **Satisfação:** Conseguir votar rápido e ver resumo dos palpites

### Persona 2: Cinéfilo Casual (35+ anos)
- **Objetivo:** Explorar opções, ler descrições, comparar escolhas
- **Comportamento:** Navega devagar, quer saber mais de cada candidato
- **Satisfação:** Interface clara, sem distrações, acesso fácil a informações

---

## 📋 Checklist WCAG (Manual)

| Aspecto | Critério | Status | Evidência |
|---------|----------|--------|-----------|
| **Semântica** | Um H1 por página | ✅ | `<h1>🎬 Bolão do Oscar 2026</h1>` |
| **Semântica** | Ordem de títulos correta | ✅ | H1 → H2 (seções) → H3 (cards) |
| **Semântica** | Botões são `<button>` ou `<a>` | ✅ | Sem divs clicáveis |
| **Teclado** | Navegável via Tab | ✅ | Testado |
| **Teclado** | Focus visível | ✅ | Borda dourada em botões/links |
| **Teclado** | Modal fechável com Esc | ✅ | Implementado |
| **Imagens** | Alt descritivo | ✅ | "Pôster de Bugonia", etc. |
| **Imagens** | Placeholder para missing | ✅ | SVG cinza com "Sem foto" |
| **Formulário** | Labels associados | ✅ | `<label for="email">` |
| **Formulário** | Erros em texto | ✅ | `aria-live="polite"` |
| **Cores** | Contraste ≥ 4.5:1 | ✅ | Ouro (#ffd700) em preto (#1a1a1a) |
| **ARIA** | Usado minimamente | ✅ | Apenas `aria-live`, `aria-invalid` |

---

## 🚀 Próximas Melhorias (Futuro)

- [ ] Backend para persistência em banco de dados
- [ ] Autenticação de usuários
- [ ] Ranking com compare votos
- [ ] Compartilhamento de resultados
- [ ] Dark/Light theme toggle
- [ ] Internacionalização (PT/EN/ES)
- [ ] Animações com Framer Motion
- [ ] PWA (offline-first)

---

## 📚 Referências & Recursos

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs - HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS Grid & Flexbox](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript ES6](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)
- [localStorage API](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)

---

## 👨‍💻 Autor

**Natanael Neves**  
Desenvolvido em: Fevereiro de 2026  
Projeto: Trabalho Prático Frontend (HTML + CSS + JavaScript)

---

## 📄 Licença

Projeto educacional. Livre para uso e modificação.

---

## ✅ Entregáveis

- ✅ Código no GitHub
- ✅ Aplicação em produção (GitHub Pages)
- ✅ README.md (este arquivo)
- ✅ HTML Semântico
- ✅ Responsividade comprovada
- ✅ Acessibilidade implementada
- ✅ JavaScript dinâmico
- ✅ localStorage funcionando

---

**Pronto para apresentar! 🎬✨**
