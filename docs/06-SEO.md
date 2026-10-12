# 06 — SEO

O HTML das páginas de catálogo e de jogo já está no arquivo. A busca orgânica não espera o JavaScript montar a ficha.

## Idioma e domínio

Idioma único da primeira versão: `pt-BR`. `lang="pt-BR"` no documento.

A URL canônica absoluta usa o domínio real, quando existir. Enquanto isso, a documentação usa `https://zuplay.example`.

## URLs

| Caminho | Arquivo | Indexar |
| --- | --- | --- |
| `/` | `index.html` | sim |
| `/categorias/{slug}/` | `categorias/{slug}/index.html` | sim, se houver jogo publicado |
| `/jogos/{slug}/` | `jogos/{slug}/index.html` | sim, se publicado |
| `/sobre/`, `/contato/`, `/privacidade/`, `/termos/` | pasta com `index.html` | sim |
| `/busca/` | `busca/index.html` | não |
| `/favoritos/` | `favoritos/index.html` | não |
| `/jogos/{slug}/play/` | pacote do jogo | não |

Tags não têm rota indexável. Filtros não ganham página própria.

O pacote em `/play/` fica de fora do sitemap e recebe `noindex` se tiver HTML próprio. Quem chega pela busca deve cair na ficha, onde estão o texto e o anúncio.

Slug é estável. Se um slug publicado mudar, a pasta antiga ganha uma página mínima com meta refresh e link, e o `robots` daquela URL não compete com a nova. Em hospedagem que permitir regra de redirect, o equivalente é 301.

## Metadados

Cada página indexável define no HTML:

- `title` único, com a marca no fim: `{seoTitle} | Zuplay`;
- meta `description` vinda de `seoDescription`;
- `link rel="canonical"` absoluto;
- Open Graph `og:title`, `og:description`, `og:url`, `og:image`, `og:locale=pt_BR`, `og:type=website`;
- meta de card grande para redes que leem `twitter:card=summary_large_image`;
- `meta name="robots"` com `index,follow` ou `noindex,follow`.

## Sitemap e robots

`sitemap.xml` na raiz inclui home, institucionais, categorias ativas com pelo menos um jogo publicado e fichas publicadas. Ficam de fora rascunho, desativado, busca, favoritos e a pasta `play/`.

`robots.txt` aponta o sitemap e desautoriza `/busca/`, `/favoritos/` e `/jogos/*/play/`.

Jogo desativado depois de publicado: página curta com `noindex` e, se a hospedagem permitir, HTTP 410. Nunca publicado: a URL não é criada.

## Dados estruturados

JSON-LD no HTML, escrito junto com a página:

- Home e categoria: `ItemList` dos jogos daquela página e `BreadcrumbList` quando houver trilha.
- Jogo: `VideoGame` com nome, descrição, imagem, gênero (categoria), autor (desenvolvedor, se houver) e `url` da ficha, não da pasta `play/`.
- Site: `WebSite` e `Organization`, com `SearchAction` apontando para `/busca/?q={search_term_string}`.
- Trilha do jogo: Início / {Categoria} / {Jogo}.

## Links internos

- Home liga para categorias e para os jogos dos blocos.
- Categoria liga para cada jogo listado.
- Jogo liga para a categoria, para relacionados e para a home.
- Rodapé liga para as páginas institucionais.

## Imagens e desempenho

- Capa e thumbnail com `width` e `height`.
- Imagens em WebP quando o arquivo de origem permitir.
- `fetchpriority="high"` só na imagem de maior chance de LCP da home.
- Demais imagens com `loading="lazy"`.
- CSS em um arquivo. JavaScript da home limitado a favoritos, tema e, mais tarde, consentimento. A grade da home é HTML.

Metas orientadoras, medidas na Fase 7 e de novo na Fase 9, em laboratório local:

- LCP abaixo de 2,5 s no celular.
- CLS abaixo de 0,1, com a área de anúncio já reservada no placeholder.
- INP abaixo de 200 ms em card, busca e favorito.

## Conteúdo

Descrição do jogo é texto escrito para aquele jogo, com no mínimo 300 caracteres para publicar. A descrição da categoria explica o tipo de jogo.

Página de categoria sem jogo publicado não entra no sitemap.
