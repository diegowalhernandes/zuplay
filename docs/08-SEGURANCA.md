# 08 — Segurança

## Superfície

O site público é arquivo estático. Não há login, formulário de admin nem API. O risco principal é o código do jogo, que roda no navegador de quem joga, e qualquer script de terceiro que a página passe a carregar.

## Isolamento do jogo

- Player em iframe.
- `sandbox="allow-scripts allow-pointer-lock"`.
- Sem `allow-same-origin`. Assim o jogo não lê o DOM nem o `localStorage` de favoritos e de consentimento, mesmo estando no mesmo domínio.
- `allow="fullscreen"` para o botão de tela cheia da ficha.
- `referrerpolicy="no-referrer"` no iframe.
- URL de parceiro só é escrita na página se for HTTPS, se o host estiver ativo em `data/embed-domains.json` e se a licença tiver `allowsEmbedding: true`.
- A ficha ignora parâmetro de URL que tente trocar o `src` do iframe.

`allow-same-origin` só entra se um jogo concreto não funcionar sem ele, e a exceção fica registrada em [10-DECISOES-TECNICAS.md](10-DECISOES-TECNICAS.md).

O jogo de demonstração da Fase 5 é um HTML pequeno feito no repositório, sem chamar rede externa.

## Conteúdo

- Descrição, instruções e controles são texto no HTML. Não há campo que interprete HTML colado por visitante.
- Imagens do catálogo: jpeg, png ou webp, proposta de até 2 MB cada, com `alt` na capa.
- Pacote do jogo: arquivos do próprio jogo, com `index.html` em `play/`. Sem executável. Proposta de até 50 MB por jogo. Quem publica confere o pacote antes de colocar no repositório.
- SVG de capa fica de fora nesta versão.

## Scripts

- JavaScript do portal fica em `js/` e faz busca, favoritos, tema, player e placeholder de anúncio.
- Fonte, se não estiver em `assets/fonts/`, não bloqueia a página: o fallback do sistema cobre.
- `js/ads.js` não cria tag de script remoto enquanto `data/ads.json` estiver desligado.
- Não há chave secreta no repositório. O client id de anúncio, quando existir, é identificador público de site, ainda assim só entra no arquivo quando a conta for real.

## Cabeçalhos

Na hospedagem que permitir cabeçalho:

- `Content-Security-Policy` permitindo o próprio domínio e, no `frame-src`, a pasta de jogos e os hosts de `embed-domains.json`.
- `Referrer-Policy: strict-origin-when-cross-origin` nas páginas do portal.
- `X-Content-Type-Options: nosniff`.
- `Strict-Transport-Security` no HTTPS.
- `frame-ancestors 'none'` nas fichas, para o portal não ser encaixado em outro site. A pasta `play/` pode ser encaixada só pelo próprio domínio.

A CSP exata é escrita na Fase 9, junto da configuração de hospedagem, quando o iframe de demonstração já existir. Um cabeçalho cedo demais, sem a hospedagem escolhida, não protege o arquivo aberto no `python -m http.server`.

## Privacidade

Favoritos e consentimento ficam neste navegador. O site não envia essa lista para lugar nenhum na primeira versão.

Busca não grava o termo digitado.

## Direitos

Jogo sem `license.verified: true` não entra na home nem no sitemap. Parceiro fora da lista não recebe iframe.
