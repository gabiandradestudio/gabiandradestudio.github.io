/* Monta a página a partir do config.js.
   Para mudar textos e preços, edite o config.js, não este arquivo. */
(function () {
  "use strict";

  /* ---------- Ícones de traço fino ---------- */
  const ICONES = {
    whatsapp:
      '<path d="M4.5 19.5l1.1-3.6A8 8 0 1 1 8.4 18.6z"/><path d="M9.2 8.6c.2-.4.6-.4.8-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .5-.1.6l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.5c.2-.2.4-.2.6-.1l1.5.6c.3.1.4.3.4.5v.5c0 .2 0 .6-.4.8-.6.4-1.5.6-2.6.2a8 8 0 0 1-4.6-4.6c-.4-1.1-.2-2 .2-2.6z"/>',
    calendario:
      '<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/><path d="M12 13.2l.8 1.6 1.7.2-1.3 1.2.4 1.7-1.6-.9-1.6.9.4-1.7-1.3-1.2 1.7-.2z"/>',
    batom:
      '<path d="M8.5 12h7v8.5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z"/><path d="M8.5 15.5h7"/><path d="M10 12V6.5l4-3.5V12"/>',
    esmalte:
      '<rect x="6.5" y="11" width="11" height="10.5" rx="2.5"/><path d="M9.5 11V8h5v3"/><path d="M10.5 8V2.5h3V8"/><path d="M9.5 15.5c1.5 1 3.5 1 5 0"/>',
    pin:
      '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
    instagram:
      '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/>',
    seta: '<path d="M9 6l6 6-6 6"/>',
    mais: '<path d="M12 6v12M6 12h12"/>',
  };

  function icone(nome, classe) {
    return (
      '<svg class="' + (classe || "icone") + '" viewBox="0 0 24 24" aria-hidden="true" fill="none" ' +
      'stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
      ICONES[nome] + "</svg>"
    );
  }

  /* ---------- Utilidades ---------- */
  function esc(texto) {
    return String(texto == null ? "" : texto)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function real(valor) {
    return "R$ " + Number(valor).toLocaleString("pt-BR", {
      minimumFractionDigits: Number.isInteger(valor) ? 0 : 2,
      maximumFractionDigits: 2,
    });
  }

  function linkWhats(mensagem) {
    return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(mensagem || "");
  }

  function menorPreco(secao) {
    const valores = [];
    secao.servicos.forEach(function (s) {
      s.precos.forEach(function (p) {
        if (typeof p.valor === "number") valores.push(p.valor);
      });
    });
    return valores.length ? Math.min.apply(null, valores) : null;
  }

  function divisor() {
    return '<div class="divisor" aria-hidden="true"><span>GA</span></div>';
  }

  const linkExterno = ' target="_blank" rel="noopener"';

  /* ---------- Topo ---------- */
  function topo() {
    return (
      '<header class="topo">' +
        '<img class="logo" src="' + esc(SITE.logo) + '" alt="Gabi Andrade Studio" ' +
          'onerror="this.replaceWith(Object.assign(document.createElement(\'span\'),{className:\'logo-texto\',textContent:\'GA\'}))">' +
        '<div class="foto-anel">' +
          '<img class="foto" src="' + esc(SITE.foto) + '" alt="Foto da Gabi" ' +
            'onerror="this.replaceWith(Object.assign(document.createElement(\'span\'),{className:\'foto foto-vazia\',textContent:\'GA\'}))">' +
        "</div>" +
        "<h1>" + esc(SITE.nome) + "</h1>" +
        '<p class="subtitulo">' + esc(SITE.subtitulo) + "</p>" +
        '<p class="frase">' + esc(SITE.frase) + "</p>" +
      "</header>"
    );
  }

  /* ---------- Botão principal ---------- */
  function botaoAgendar() {
    const a = SITE.agendar;
    return (
      '<a class="botao botao-principal" href="' + linkWhats(a.mensagem) + '"' + linkExterno + ">" +
        '<span class="botao-icone">' + icone("whatsapp") + "</span>" +
        '<span class="botao-texto"><strong>' + esc(a.titulo) + "</strong>" +
          "<small>" + esc(a.detalhe) + "</small></span>" +
      "</a>"
    );
  }

  /* ---------- Próximas datas ---------- */
  function dataLocal(texto) {
    const p = String(texto).split("-").map(Number);
    return new Date(p[0], p[1] - 1, p[2]);
  }

  function contagem(dias, chamada) {
    if (dias === 0) return "É hoje! Corre " + chamada + " 🎉";
    if (dias === 1) return "Falta 1 dia " + chamada + "!";
    return "Faltam " + dias + " dias " + chamada + "!";
  }

  function festas() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const proximas = (SITE.festas || [])
      .map(function (f) {
        const dias = Math.round((dataLocal(f.data) - hoje) / 86400000);
        return Object.assign({ dias: dias }, f);
      })
      .filter(function (f) { return f.dias >= 0; })
      .sort(function (a, b) { return a.dias - b.dias; })
      .slice(0, SITE.festasMostrar || 3);

    if (!proximas.length) return "";

    const cartoes = proximas.map(function (f) {
      return (
        '<article class="festa">' +
          '<p class="festa-contagem">' + esc(contagem(f.dias, f.chamada)) + "</p>" +
          "<h3>" + esc(f.titulo) + "</h3>" +
          "<p>" + esc(f.texto) + "</p>" +
          '<a class="botao-pequeno" href="' + linkWhats(f.mensagem) + '"' + linkExterno + ">" +
            icone("whatsapp", "icone icone-pequeno") + "Garantir meu horário" +
          "</a>" +
        "</article>"
      );
    }).join("");

    return (
      divisor() +
      '<section class="bloco" aria-labelledby="titulo-festas">' +
        '<h2 class="bloco-titulo" id="titulo-festas">' + icone("calendario", "icone icone-titulo") +
          esc(SITE.festasTitulo) + "</h2>" +
        '<div class="festas' + (proximas.length === 1 ? " festas-uma" : "") + '">' + cartoes + "</div>" +
      "</section>"
    );
  }

  /* ---------- Painéis de serviços ---------- */
  function painel(id, nomeIcone, secao) {
    const minimo = menorPreco(secao);

    const servicos = secao.servicos.map(function (s) {
      const precos = s.precos.map(function (p) {
        const valor = typeof p.valor === "number" ? real(p.valor) : esc(p.valor);
        return (
          "<li><span>" + esc(p.rotulo) + "</span>" +
          '<span class="preco">' + valor +
            (p.complemento ? " <em>" + esc(p.complemento) + "</em>" : "") +
          "</span></li>"
        );
      }).join("");

      return (
        '<div class="servico">' +
          "<h4>" + esc(s.nome) + "</h4>" +
          '<ul class="precos">' + precos + "</ul>" +
          (s.mensagem
            ? '<a class="botao-pequeno" href="' + linkWhats(s.mensagem) + '"' + linkExterno + ">" +
                icone("whatsapp", "icone icone-pequeno") + "Quero esse</a>"
            : "") +
        "</div>"
      );
    }).join("");

    const observacoes = (secao.observacoes || []).map(function (o) {
      return '<p class="observacao">' + esc(o) + "</p>";
    }).join("");

    const botaoFinal = secao.botao
      ? '<a class="botao botao-cheio" href="' + linkWhats(secao.mensagem) + '"' + linkExterno + ">" +
          '<span class="botao-icone">' + icone("whatsapp") + "</span>" +
          '<span class="botao-texto"><strong>' + esc(secao.botao) + "</strong></span></a>"
      : "";

    return (
      '<div class="expansivel">' +
        '<button class="botao" type="button" aria-expanded="false" aria-controls="painel-' + id + '">' +
          '<span class="botao-icone">' + icone(nomeIcone) + "</span>" +
          '<span class="botao-texto"><strong>' + esc(secao.titulo) + "</strong>" +
            (minimo !== null ? "<small>a partir de " + real(minimo) + "</small>" : "") +
          "</span>" +
          icone("mais", "icone icone-abrir") +
        "</button>" +
        '<div class="painel" id="painel-' + id + '" hidden>' +
          '<div class="painel-conteudo">' +
            (secao.frase ? '<p class="painel-frase">' + esc(secao.frase) + "</p>" : "") +
            servicos + observacoes + botaoFinal +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  /* ---------- Links simples ---------- */
  function botaoLink(href, nomeIcone, dados) {
    return (
      '<a class="botao" href="' + href + '"' + linkExterno + ">" +
        '<span class="botao-icone">' + icone(nomeIcone) + "</span>" +
        '<span class="botao-texto"><strong>' + esc(dados.titulo) + "</strong>" +
          (dados.detalhe ? "<small>" + esc(dados.detalhe) + "</small>" : "") +
        "</span>" +
        icone("seta", "icone icone-abrir") +
      "</a>"
    );
  }

  /* ---------- Montagem ---------- */
  function montar() {
    const mapa = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(SITE.endereco);
    const insta = "https://instagram.com/" + SITE.instagram;

    document.getElementById("app").innerHTML =
      topo() +
      botaoAgendar() +
      festas() +
      divisor() +
      '<nav class="bloco lista" aria-label="Serviços e contatos">' +
        painel("maquiagem", "batom", SITE.maquiagem) +
        painel("unhas", "esmalte", SITE.unhas) +
        botaoLink(mapa, "pin", SITE.comoChegar) +
        botaoLink(insta, "instagram", SITE.instagramBotao) +
      "</nav>" +
      divisor() +
      '<footer class="rodape">' +
        "<p>" + esc(SITE.pagamento) + "</p>" +
        '<p class="rodape-assinatura">' + esc(SITE.rodape) + "</p>" +
      "</footer>";

    document.querySelectorAll(".expansivel > .botao").forEach(function (botao) {
      botao.addEventListener("click", function () {
        const aberto = botao.getAttribute("aria-expanded") === "true";
        const painelEl = document.getElementById(botao.getAttribute("aria-controls"));
        botao.setAttribute("aria-expanded", String(!aberto));
        painelEl.hidden = aberto;
      });
    });
  }

  montar();
})();
