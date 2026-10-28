# Gabi Andrade Studio · link na bio

Página única para o link da bio do Instagram (@gabiandradestudio), feita para celular, com foco em agendar pelo WhatsApp.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `config.js` | **Todo o conteúdo**: textos, preços, festas, mensagens do WhatsApp, endereço. É o único arquivo que precisa ser editado no dia a dia. |
| `images/logo-ga.jpg` | Logo GA (topo da página). |
| `images/gabi.jpg` | Foto da Gabi (aparece no círculo). De preferência quadrada, 600×600 px ou maior. |
| `index.html`, `style.css`, `script.js` | Estrutura, visual e funcionamento. Não precisam ser editados. |

Enquanto as imagens não forem colocadas na pasta `images`, a página mostra um monograma "GA" no lugar.

## Como atualizar (pelo próprio GitHub, até pelo celular)

1. Abra o arquivo `config.js` e toque no lápis ✏️ (Edit).
2. Mude só o que está entre aspas ou os números dos preços.
3. Toque em **Commit changes**. Em um ou dois minutos o site atualiza.

### Exemplos

**Mudar um preço:** procure o serviço e troque o número.
```js
{ rotulo: "Aplicação", valor: 80 },   // era 80, vira 85 → valor: 85
```
O "a partir de R$ ..." dos botões é recalculado sozinho.

**Adicionar uma festa:** copie um bloco inteiro dentro de `festas: [ ... ]` e mude os dados.
```js
{
  titulo: "Formatura",
  data: "2026-12-12",               // ANO-MÊS-DIA
  chamada: "pra formatura",         // completa "Faltam 10 dias ..."
  texto: "Make linda pra foto do canudo 🎓",
  mensagem: "Oi Gabi! Vim pelo Instagram e quero agendar pra minha formatura 🎓",
},
```
As festas aparecem em ordem de data, mostram a contagem de dias e **somem sozinhas** depois que passam. O número de cartões visíveis é definido em `festasMostrar`.

**Adicionar um serviço de unhas:** copie um bloco de `servicos` dentro de `unhas` (com `nome`, `precos` e `mensagem`).

**Aviso extra no painel de unhas:** acrescente uma linha em `observacoes`.

⚠️ Mantenha as aspas e as vírgulas no fim de cada linha, como nos exemplos. Se a página ficar em branco depois de uma edição, quase sempre é uma vírgula ou aspa faltando.

## Publicação (Netlify)

O site fica em **https://gabiandradestudio.netlify.app**, publicado pelo Netlify a partir deste repositório. Toda alteração salva aqui no GitHub atualiza o site sozinha em cerca de 1 minuto.

Configuração usada no Netlify: branch `claude/friendly-rubin-mn032v`, sem comando de build, pasta de publicação vazia (raiz).
