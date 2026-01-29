import categorias from "./dados.js";

const app = document.querySelector("#app");
const modal = document.querySelector("#detalhesModal");
const detalhesCorpo = document.querySelector("#detalhesCorpo");
const botaoFechar = document.querySelector(".modal__fechar");
const formulario = document.querySelector("#formularioContato");

const placeholderSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">
  <rect width="400" height="600" fill="#d1d5db" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="24">
    Sem foto
  </text>
</svg>
`;

const placeholderImg = `data:image/svg+xml;utf8,${encodeURIComponent(
  placeholderSvg.trim()
)}`;


function getImagemUrl(candidato) {
  if (candidato && typeof candidato.imagem === "string" && candidato.imagem.trim() !== "") {
    return candidato.imagem.trim();
  }
  return placeholderImg;
}


function carregarVotos() {
  const votos = localStorage.getItem("votos");
  return votos ? JSON.parse(votos) : {};
}

function salvarVoto(categoriaId, candidatoId) {
  const votos = carregarVotos();
  votos[categoriaId] = candidatoId;
  localStorage.setItem("votos", JSON.stringify(votos));
}

function removerVoto(categoriaId) {
  const votos = carregarVotos();
  delete votos[categoriaId];
  localStorage.setItem("votos", JSON.stringify(votos));
}

function verificarVotoSalvo(categoriaId, candidatoId) {
  const votos = carregarVotos();
  return votos[categoriaId] === candidatoId;
}

function contarVotosTotais() {
  const votos = carregarVotos();
  return Object.keys(votos).length;
}

function atualizarResumoVotos() {
  const resumoVotos = document.querySelector("#resumoVotos");
  if (!resumoVotos) return;

  const votos = carregarVotos();
  const votosTotais = Object.keys(votos).length;

  if (votosTotais === 0) {
    resumoVotos.className = "resumo-votos resumo-votos--vazio";
    resumoVotos.innerHTML = `
      <p>Você ainda não votou em nenhuma categoria.</p>
      <p>Clique em <strong>Votação</strong> para começar!</p>
    `;
    return;
  }

  resumoVotos.className = "resumo-votos";
  let html = `<h3 class="resumo-votos__titulo">✓ Seus Palpites (${votosTotais}/${categorias.length})</h3>`;
  html += '<ul class="resumo-votos__lista">';

  categorias.forEach((categoria) => {
    const candidatoId = votos[categoria.id];
    if (candidatoId) {
      const candidato = categoria.candidatos.find(c => c.id === candidatoId);
      if (candidato) {
        html += `
          <li class="resumo-votos__item">
            <div>
              <span class="resumo-votos__categoria">${categoria.titulo}</span>
              <br>
              <span class="resumo-votos__candidato">${candidato.nome}</span>
            </div>
            <span class="resumo-votos__contador">${votosTotais}</span>
          </li>
        `;
      }
    }
  });

  html += '</ul>';
  resumoVotos.innerHTML = html;
}

function abrirModal(candidato) {
  detalhesCorpo.innerHTML = `
    <img src="${getImagemUrl(candidato)}" alt="Detalhes de ${candidato.nome}" class="modal__imagem">
    <h3 class="modal__titulo">${candidato.nome}</h3>
    <p class="modal__sinopse">${candidato.sinopse}</p>
  `;
  modal.showModal();
}

function fecharModal() {
  modal.close();
}

botaoFechar.addEventListener("click", fecharModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) fecharModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.open) fecharModal();
});


function criarCardCandidato(candidato, categoriaId) {
  const article = document.createElement("article");
  article.className = "card-candidato";
  
  const votado = verificarVotoSalvo(categoriaId, candidato.id);
  if (votado) article.classList.add("card-candidato--votado");

  const img = document.createElement("img");
  img.src = getImagemUrl(candidato);
  img.alt = `Pôster ou foto de ${candidato.nome}`;
  img.loading = "lazy";
  img.className = "card__imagem";
  img.addEventListener("click", () => abrirModal(candidato));
  img.addEventListener("error", () => {
    img.src = placeholderImg;
  });
  img.style.cursor = "pointer";

  const titulo = document.createElement("h3");
  titulo.className = "card__titulo";
  titulo.innerHTML = candidato.filme 
    ? `${candidato.nome}<span class="card__filme">${candidato.filme}</span>`
    : candidato.nome;

  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "card__botao";
  botao.textContent = votado ? "✓ VOTADO" : "VOTAR";
  botao.setAttribute("data-categoria", categoriaId);
  botao.setAttribute("data-candidato", candidato.id);
  
  botao.addEventListener("click", () => {
    if (votado) {
      removerVoto(categoriaId);
    } else {
      salvarVoto(categoriaId, candidato.id);
    }
    renderizar();
    atualizarResumoVotos();
  });

  article.append(img, titulo, botao);
  return article;
}


function renderizar() {
  if (!app) return;

  app.innerHTML = "";

  categorias.forEach((categoria) => {
    const section = document.createElement("section");
    section.className = "secao-categoria";

    const h2 = document.createElement("h2");
    h2.className = "secao__titulo";
    h2.textContent = categoria.titulo;

    const container = document.createElement("div");
    container.className = "grid-candidatos";

    categoria.candidatos.forEach((candidato) => {
      container.appendChild(criarCardCandidato(candidato, categoria.id));
    });

    section.append(h2, container);
    app.appendChild(section);
  });
}


function validarFormulario(e) {
  e.preventDefault();

  const email = document.querySelector("#email");
  const nome = document.querySelector("#nome");
  const erroEmail = document.querySelector("#erroEmail");
  const erroNome = document.querySelector("#erroNome");
  const mensagem = document.querySelector("#mensagemEnvio");

  let valido = true;

  erroEmail.textContent = "";
  erroNome.textContent = "";
  mensagem.textContent = "";

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value || !regexEmail.test(email.value)) {
    erroEmail.textContent = "E-mail inválido. Use o formato: seu@email.com";
    email.setAttribute("aria-invalid", "true");
    valido = false;
  } else {
    email.setAttribute("aria-invalid", "false");
  }

  if (!nome.value || nome.value.trim().length < 3) {
    erroNome.textContent = "Nome deve ter no mínimo 3 caracteres.";
    nome.setAttribute("aria-invalid", "true");
    valido = false;
  } else {
    nome.setAttribute("aria-invalid", "false");
  }

  const votosTotais = contarVotosTotais();
  if (votosTotais === 0) {
    mensagem.textContent = "⚠️ Você precisa votar em pelo menos uma categoria.";
    mensagem.classList.add("formulario__mensagem--erro");
    valido = false;
  } else if (votosTotais < categorias.length) {
    mensagem.textContent = `⚠️ Você votou em ${votosTotais}/${categorias.length} categorias. Complete sua votação!`;
    mensagem.classList.add("formulario__mensagem--aviso");
    valido = false;
  } else {
    mensagem.textContent = `✅ Bolão completo! ${votosTotais}/${categorias.length} categorias votadas. Enviando...`;
    mensagem.classList.remove("formulario__mensagem--erro", "formulario__mensagem--aviso");
    mensagem.classList.add("formulario__mensagem--sucesso");
  }

  if (valido && votosTotais === categorias.length) {
    setTimeout(() => {
      alert(`Obrigado, ${nome.value}! Seu bolão foi enviado para ${email.value}`);
      formulario.reset();
      localStorage.removeItem("votos");
      renderizar();
    }, 1000);
  }
}

formulario.addEventListener("submit", validarFormulario);

document.querySelectorAll(".navbar__link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const elemento = document.querySelector(href);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

renderizar();
atualizarResumoVotos();

