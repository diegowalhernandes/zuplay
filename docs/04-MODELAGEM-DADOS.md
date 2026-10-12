# 04 — Modelagem de dados

Não há banco. Dois arquivos JSON são a fonte do catálogo. As páginas HTML publicadas repetem os campos que a busca orgânica precisa ler.

Slug em ASCII minúsculo, com hífen.

## Arquivos

| Arquivo | Papel |
| --- | --- |
| `data/categories.json` | Categorias ativas, ordem e texto da página |
| `data/games.json` | Fichas, licença, mídia e blocos da home |
| `data/embed-domains.json` | Hosts permitidos para iframe de parceiro |
| `data/ads.json` | Liga o anúncio e lista os slots |

## Categoria

```json
{
  "name": "Corrida",
  "slug": "corrida",
  "description": "Texto original da página da categoria.",
  "seoTitle": "Jogos de corrida grátis",
  "seoDescription": "Corra no navegador, sem instalar.",
  "sortOrder": 30,
  "childDirected": false,
  "active": true
}
```

Educativos nascem com `childDirected: true`.

## Jogo

```json
{
  "title": "Corrida do Bosque",
  "slug": "corrida-do-bosque",
  "shortDescription": "Desvie das árvores e chegue ao lago.",
  "description": "Texto original com pelo menos 300 caracteres.",
  "instructions": "Segure a tela ou a seta para mudar de faixa.",
  "controls": "Toque, setas ou A e D.",
  "mobileCompatible": true,
  "status": "published",
  "publishedAt": "2026-10-12",
  "category": "corrida",
  "tags": ["desviar", "um-toque"],
  "developer": "Zuplay",
  "embed": { "mode": "hosted", "path": "play/index.html" },
  "thumbnail": "/assets/games/corrida-do-bosque/thumb.webp",
  "cover": "/assets/games/corrida-do-bosque/cover.webp",
  "coverAlt": "Carro claro numa trilha entre árvores",
  "seoTitle": "Corrida do Bosque",
  "seoDescription": "Desvie das árvores neste jogo de corrida grátis.",
  "playCount": 0,
  "childDirected": false,
  "homepage": { "featured": false, "recommended": true },
  "license": {
    "sourceType": "original",
    "rightsHolder": "Zuplay",
    "licenseName": "Uso próprio no portal",
    "licenseUrl": "",
    "allowsEmbedding": true,
    "attributionRequired": false,
    "attributionText": "",
    "validUntil": "",
    "verified": true
  }
}
```

`status` aceita `draft`, `published` e `disabled`.

`embed.mode` aceita `hosted` ou `partner`. Em `hosted`, `path` é relativo à pasta do jogo. Em `partner`, o campo passa a ser `url` HTTPS.

`playCount` é editorial. O navegador não soma visitas sozinho.

## Domínio de embed

```json
{ "domain": "jogos.parceiro.example", "active": true, "notes": "Contrato de outubro de 2026" }
```

O valor é só o host, sem esquema e sem caminho.

## Anúncio

```json
{
  "enabled": false,
  "clientId": "",
  "slots": ["home_inline", "catalog_inline", "game_below_player", "game_side"]
}
```

`enabled: true` com `clientId` vazio continua tratado como desligado.

## Regras para considerar publicado

O jogo só ganha card na home, link na categoria e linha no sitemap quando tudo abaixo existe:

- título, slug, descrição com pelo menos 300 caracteres;
- instruções e controles preenchidos;
- `seoTitle` e `seoDescription`;
- categoria com `active: true`;
- thumbnail, capa e `coverAlt`;
- `license.verified` verdadeiro;
- `validUntil` vazio ou ainda não vencido;
- `embed.mode` `hosted` com pacote no disco, ou `partner` com URL HTTPS, `allowsEmbedding` verdadeiro e host ativo na lista.

Rascunho pode estar incompleto. Desativado sai da home, da categoria e do sitemap. Se a URL já tiver sido publicada, a ficha passa a responder com uma página curta de “jogo indisponível” e, na hospedagem que permitir, status 410. Em hospedagem que só serve arquivo, a página estática explica a indisponibilidade e leva `noindex`.

## Favoritos

Fora do JSON. `localStorage` guarda uma lista de slugs na chave `zuplay.favorites`.
