/* =====================================================================
   CONTEÚDO DO SITE — GABI ANDRADE STUDIO
   ---------------------------------------------------------------------
   Tudo o que aparece na página está aqui: textos, preços, festas e
   mensagens do WhatsApp. Para atualizar, é só mudar o que está entre
   aspas "assim" ou os números dos preços. Não precisa mexer em mais
   nenhum arquivo.

   Dicas rápidas:
   - Preços são números sem "R$" (ex.: 80). O site formata sozinho.
   - O "a partir de" dos botões é calculado sozinho (menor preço).
   - Datas das festas no formato "ANO-MÊS-DIA" (ex.: "2026-12-25").
     Depois que a data passa, o cartão some sozinho.
   - Mantenha as vírgulas no fim de cada item, igual aos exemplos.
   ===================================================================== */

const SITE = {

  /* ---------- Quem é ---------- */
  nome: "Gabi Andrade",
  subtitulo: "Maquiadora & Nail Designer",
  frase: "Bora ficar ainda mais linda? 💖",

  /* Fotos: coloque os arquivos na pasta "images" com estes nomes. */
  logo: "images/logo-ga.png",
  foto: "images/gabi.jpg",

  /* ---------- Contatos ---------- */
  whatsapp: "5514997189069",          // só números, com 55 + DDD
  instagram: "gabiandradestudio",     // sem o @
  endereco: "Travessa Avelino Paulo da Costa, 15, Jardim Planalto, Itaí/SP",

  /* ---------- Botão principal ---------- */
  agendar: {
    titulo: "Agendar pelo WhatsApp",
    detalhe: "Respondo rapidinho, prometo ✨",
    mensagem: "Oi Gabi! Vim pelo Instagram e quero agendar um horário 💖",
  },

  /* ---------- Próximas datas ----------
     titulo:   nome que aparece no cartão
     data:     "ANO-MÊS-DIA"
     chamada:  como completa a frase "Faltam X dias ..." (pro/pra)
     texto:    frase curtinha do cartão
     mensagem: mensagem pronta do WhatsApp
     Para adicionar uma festa, copie um bloco { ... }, e cole embaixo. */
  festasTitulo: "Próximas datas",
  festasMostrar: 3,                   // quantos cartões aparecem por vez
  festas: [
    {
      titulo: "Halloween",
      data: "2026-10-31",
      chamada: "pro Halloween",
      texto: "Make de festa à fantasia? Deixa comigo 🎃",
      mensagem: "Oi Gabi! Vim pelo Instagram e quero agendar minha make pro Halloween 🎃",
    },
    {
      titulo: "Natal",
      data: "2026-12-24",
      chamada: "pro Natal",
      texto: "Make e unhas prontas pra ceia 🎄",
      mensagem: "Oi Gabi! Vim pelo Instagram e quero garantir meu horário pro Natal 🎄✨",
    },
    {
      titulo: "Réveillon",
      data: "2026-12-31",
      chamada: "pro Réveillon",
      texto: "Começa o ano brilhando ✨",
      mensagem: "Oi Gabi! Vim pelo Instagram e quero agendar pro Réveillon ✨",
    },
    {
      titulo: "Carnaval",
      data: "2027-02-06",
      chamada: "pro Carnaval",
      texto: "Glitter, brilho e unhas de arrasar 🎉",
      mensagem: "Oi Gabi! Vim pelo Instagram e quero agendar pro Carnaval 🎉",
    },
    {
      titulo: "Dia da Mulher",
      data: "2027-03-08",
      chamada: "pro Dia da Mulher",
      texto: "Um mimo pra você mesma 💖",
      mensagem: "Oi Gabi! Vim pelo Instagram e quero me dar um mimo no Dia da Mulher 💖",
    },
    {
      titulo: "Dia das Mães",
      data: "2027-05-09",
      chamada: "pro Dia das Mães",
      texto: "Que tal um presente pra mãe? 🌷",
      mensagem: "Oi Gabi! Vim pelo Instagram e quero agendar pro Dia das Mães 🌷",
    },
    {
      titulo: "Dia dos Namorados",
      data: "2027-06-12",
      chamada: "pro Dia dos Namorados",
      texto: "Pronta pro date 💕",
      mensagem: "Oi Gabi! Vim pelo Instagram e quero agendar pro Dia dos Namorados 💕",
    },
  ],

  /* ---------- Serviços (botões que abrem um painel) ----------
     Cada serviço tem uma lista de preços. Se tiver "mensagem",
     aparece o botão "Quero esse" com a mensagem pronta. */
  maquiagem: {
    titulo: "Maquiagem",
    frase: "Sua make, minha missão ✨",
    servicos: [
      {
        nome: "Social, madrinhas, aniversariantes e eventos",
        precos: [{ rotulo: "Make completa", valor: 110 }],
      },
      {
        nome: "A domicílio",
        precos: [{ rotulo: "Make completa", valor: 110, complemento: "+ deslocamento" }],
      },
    ],
    botao: "Quero agendar minha make",
    mensagem: "Oi Gabi! Vim pelo Instagram e quero agendar minha make 💄✨",
  },

  unhas: {
    titulo: "Unhas",
    frase: "Unhas prontas pra arrasar 💅",
    servicos: [
      {
        nome: "Molde F1",
        precos: [
          { rotulo: "Aplicação", valor: 80 },
          { rotulo: "Mega decoração", valor: 90 },
          { rotulo: "Manutenção", valor: 70 },
        ],
        mensagem: "Oi Gabi! Vim pelo Instagram e quero agendar molde F1 💅✨",
      },
      {
        nome: "Fibra de vidro",
        precos: [
          { rotulo: "Aplicação", valor: 110 },
          { rotulo: "Mega decoração", valor: 120 },
          { rotulo: "Manutenção", valor: 90 },
        ],
        mensagem: "Oi Gabi! Vim pelo Instagram e quero agendar fibra de vidro 💅✨",
      },
      {
        nome: "Banho de gel / esmaltação em gel",
        precos: [
          { rotulo: "Aplicação", valor: 50 },
          { rotulo: "Mega decoração", valor: 60 },
        ],
        mensagem: "Oi Gabi! Vim pelo Instagram e quero agendar banho de gel 💅✨",
      },
    ],
    observacoes: [
      "Unha quebrada na manutenção: + R$ 10 por unha",
    ],
  },

  /* ---------- Outros botões ---------- */
  comoChegar: {
    titulo: "Como chegar",
    detalhe: "Jardim Planalto · Itaí/SP",
  },
  instagramBotao: {
    titulo: "Instagram",
    detalhe: "@gabiandradestudio",
  },

  /* ---------- Rodapé ---------- */
  pagamento: "Pagamento: dinheiro, cartão e Pix",
  rodape: "Gabi Andrade Studio · Itaí/SP",
};
