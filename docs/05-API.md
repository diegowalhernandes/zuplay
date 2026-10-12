# 05 — Contrato do catálogo

Não há API nem backend nesta versão. Este documento fixa os arquivos estáticos que o JavaScript pode ler e o que cada página HTML precisa conter.

## `GET` que o navegador faz

São leituras de arquivo, no mesmo domínio do site.

| Arquivo | Quem lê | Quando |
| --- | --- | --- |
| `/data/games.json` | `js/search.js`, `js/favorites.js` | Busca e página de favoritos |
| `/data/categories.json` | A home, se a navegação for montada por script | Opcional; a navegação também pode ser HTML puro |
| `/data/ads.json` | `js/ads.js` | Cada página com slot |
| `/data/embed-domains.json` | Revisão humana e, na Fase 5, checagem antes de escrever o `src` do parceiro | Publicação |

A home e a ficha do jogo não dependem desses arquivos para mostrar título, descrição e capa. Esse conteúdo está no HTML.

## Forma de `games.json`

Um array de objetos no formato de [04-MODELAGEM-DADOS.md](04-MODELAGEM-DADOS.md). Slug único. A busca ignora item com `status` diferente de `published`.

Consulta no cliente:

- texto com pelo menos 2 caracteres, no máximo 80;
- compara sem acento, em minúsculas, contra `title`, nome da categoria e `tags`;
- lista vazia mostra o estado vazio, sem erro.

## Forma da ficha HTML

`jogos/{slug}/index.html` inclui, no próprio arquivo:

- `title` e meta description;
- um H1 com o nome do jogo;
- descrição, instruções e controles em texto;
- capa com `width`, `height` e `alt`;
- iframe do player conforme [02-ARQUITETURA.md](02-ARQUITETURA.md);
- links para a categoria e para jogos relacionados;
- slot de anúncio;
- JSON-LD descrito em [06-SEO.md](06-SEO.md).

O `src` do iframe de parceiro só é escrito na página se a licença e `embed-domains.json` autorizarem. O JavaScript da ficha não aceita uma URL colada na query string.

## O que não existe

- `POST` de eventos para um servidor do Zuplay.
- Cadastro de jogo por requisição.
- Upload.
- Conta de jogador.
- Lista de rascunhos no site público. Rascunho pode estar no JSON, e o script de busca o ignora.
