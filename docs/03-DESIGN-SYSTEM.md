# 03 — Design system

Identidade exclusiva do Zuplay, implementada com CSS comum. Variáveis em `:root` e overrides em `[data-theme="dark"]`. Sem Tailwind e sem componentes de framework.

A referência de usabilidade é um portal de jogos com cards grandes e navegação curta. Forma, cor e tipografia abaixo são da marca Zuplay.

## Princípios

- Mobile-first. O layout de referência nasce em 360 px e cresce.
- Toque confortável: alvo mínimo de 44 px.
- Imagem grande no card, texto curto logo abaixo, sem competir com a capa.
- Movimento curto (150–200 ms). Nada de animação que atrase o clique em jogar.
- Contraste WCAG AA nos textos. O amarelo é destaque com texto escuro.
- Modo escuro opcional, respeitando `prefers-color-scheme` e uma escolha salva no navegador.

## Cor

| Token CSS | Claro | Escuro | Uso |
| --- | --- | --- | --- |
| `--bg` | `#F6F4FB` | `#0F0D16` | Fundo da página |
| `--surface` | `#FFFFFF` | `#1A1626` | Cards e cabeçalho |
| `--text` | `#1C1430` | `#F4F1FB` | Texto principal |
| `--muted` | `#5C5470` | `#B7AEC9` | Texto secundário |
| `--border` | `#E6E0F0` | `#2E2840` | Divisores e contornos |
| `--primary` | `#5B21B6` | `#C4B5FD` | Marca, links e botão principal |
| `--primary-strong` | `#4C1D95` | `#DDD6FE` | Hover e texto pequeno sobre claro |
| `--secondary` | `#1D4ED8` | `#60A5FA` | Ações secundárias |
| `--accent` | `#F5B800` | `#FBBF24` | Selo e destaque |
| `--accent-ink` | `#1C1430` | `#1C1430` | Texto sobre o amarelo |
| `--danger` | `#B91C1C` | `#FCA5A5` | Erro |

Conferência em 12 de outubro de 2026: texto, texto secundário, links, botões e selo amarelo ficam em pelo menos 4,5:1 no claro e no escuro. O botão no modo escuro usa tinta escura sobre o roxo e o azul claros. Branco sobre o azul claro do modo escuro ficava em 2,5:1 e não é usado.

## Tipo

- Títulos e logo: **Sora**.
- Texto de interface: **Source Sans 3**.
- Fallback: `Segoe UI`, `Helvetica Neue`, sans-serif.

As fontes estão em `assets/fonts/`, com a licença OFL ao lado de cada arquivo. O fallback do sistema continua no CSS se o arquivo não carregar.

| Estilo | Tamanho | Uso |
| --- | --- | --- |
| Display | 40 / 48 | Hero da home, só em telas largas |
| H1 | 32 / 40 | Página de categoria e do jogo |
| H2 | 24 / 32 | Seções da home |
| Body | 16 / 24 | Descrição e instruções |
| Small | 14 / 20 | Meta do card e rodapé |

No celular, H1 a 28 px e display a 32 px.

## Forma

- Raio do card: 16 px.
- Raio do botão e do campo: 12 px.
- Raio da categoria: pill.
- Sombra suave no card claro. No escuro, borda de 1 px.
- Grade: 2 colunas no celular, 3 no tablet, 4 a 6 no desktop, vão de 12 a 16 px.
- Largura máxima do conteúdo: 1200 px.

Classes previstas: `.container`, `.site-header`, `.category-nav`, `.search-input`, `.game-card`, `.game-grid`, `.section`, `.site-footer`, `.button`, `.skeleton`, `.empty-state`, `.error-state`, `.ad-slot`.

O card reserva a proporção da capa (16:9) com `aspect-ratio`, para evitar salto de layout. A primeira imagem da home pode usar `fetchpriority="high"`. As demais usam `loading="lazy"`.

## Cabeçalho

- Logo “Zuplay”, link para `/`.
- Busca visível. No celular estreito ela pode ir para `/busca/` em vez de ocupar a barra inteira, se os dois não couberem com alvo de 44 px.
- Categorias logo abaixo do cabeçalho, com rolagem horizontal.

## Rodapé

Links para sobre, contato, privacidade, termos. Texto curto de que os jogos rodam no navegador. Link para refazer a escolha de cookies quando o banner existir.

## Estados

- Carregando: bloco cinza no formato do card.
- Vazio: frase objetiva e link para a home ou para limpar a busca.
- Erro: o que falhou em uma frase e botão “Tentar de novo”. A busca usa isso se `games.json` não carregar.
- Jogo sem compatibilidade mobile: aviso visível antes do player.

## Anúncio no layout

Área com rótulo “Publicidade”, fundo `--surface`, borda tracejada no placeholder e altura reservada. Distância mínima de 16 px dos botões de jogar, tela cheia e favorito.

## Acessibilidade

- `header`, `nav`, `main`, `footer`, um H1 por página.
- Foco visível com anel de 2 px na cor secundária.
- Nome acessível em busca, favorito e tela cheia.
- `prefers-reduced-motion` zera transições.
- Se o iframe falhar, descrição e instruções continuam na página.
