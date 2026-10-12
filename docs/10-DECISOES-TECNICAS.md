# 10 — Decisões técnicas

Revisão em 12 de outubro de 2026, a pedido do responsável pelo projeto. A stack passou a ser HTML, CSS e JavaScript estáticos, com o jogo num iframe.

## Histórico

No mesmo dia, a documentação chegou a descrever Next.js 16.4, Django 6.1.2, PostgreSQL 18.6 e Redis 8.2, porque o briefing inicial pedia essa stack. A conversa seguinte fechou que, para publicar jogos toda semana e exibir anúncios, essa stack atrasava o portal. Este arquivo passa a valer no lugar daquele desenho.

## ADR-016 — Site estático

As páginas públicas são arquivos HTML. CSS e JavaScript do portal ficam em `css/` e `js/`. Não há Next.js, React, Django, banco, Redis nem Docker na primeira versão.

Motivo: a ficha do jogo precisa ser HTML de verdade, o jogo novo da semana é uma pasta a mais, e a hospedagem de arquivo estático já entrega HTTPS e CDN.

## ADR-017 — Ficha do portal e pacote separados

`jogos/{slug}/index.html` é a página do Zuplay, com texto, capa, anúncio e iframe. `jogos/{slug}/play/index.html` é o jogo. A home aponta para a ficha, não para o pacote.

Motivo: iframe sozinho não dá página indexável nem lugar seguro para anúncio. Embutir outro portal inteiro também fica de fora.

## ADR-018 — Catálogo em JSON

`data/games.json` e `data/categories.json` são a fonte dos campos. A busca e os favoritos leem o JSON. A ficha publicada repete o texto no HTML.

Motivo: dá para adicionar um jogo por semana com diff revisável, sem API e sem painel. Um script gerador pode entrar depois, se a edição manual passar a atrasar a publicação.

## ADR-019 — Sandbox sem allow-same-origin

O iframe usa `sandbox="allow-scripts allow-pointer-lock"` e `allow="fullscreen"`. Parceiro só entra com licença e host em `data/embed-domains.json`.

Motivo: o jogo não deve ler favoritos nem consentimento. No site estático não há cookie de admin para proteger além disso.

## ADR-020 — Anúncio desligado

`data/ads.json` nasce com `enabled: false`. O slot reserva espaço e mostra “Publicidade”. Script de rede só com client id real e consentimento. `childDirected: true` não recebe anúncio personalizado.

## ADR-021 — playCount editorial

Populares e mais jogados usam o número escrito no JSON. O navegador não envia evento para um servidor do Zuplay.

Motivo: contador ao vivo pede backend. Até existir um medidor externo, a ordem da home é uma escolha de quem publica.

## ADR-022 — Idioma, URLs e uma categoria

pt-BR. Rotas de diretório: `/`, `/categorias/{slug}/`, `/jogos/{slug}/`, `/busca/`, `/favoritos/` e institucionais. Uma categoria principal por jogo. Tags sem página indexável.

Favoritos continuam em `localStorage`, chave `zuplay.favorites`. Conta de jogador está fora das fases 1 a 9.

## ADR-023 — Licença para entrar no sitemap

`license.verified: true` é obrigatório para card público e sitemap. Demonstrações fictícias da Fase 3 ficam marcadas como demonstração e não entram no sitemap.

## Pendências

O padrão abaixo segue se a aprovação da Fase 1 não pedir mudança.

| Pendência | Padrão |
| --- | --- |
| Repositório Git | [diegowalhernandes/zuplay](https://github.com/diegowalhernandes/zuplay), separado de `projetos` |
| Domínio | Placeholder `https://zuplay.example` até existir domínio |
| Idioma | pt-BR único |
| Hospedagem | Estática, escolhida na Fase 9. Sem deploy nesta fase |
| Analytics | Nenhum servidor próprio. `playCount` manual |
| Privacidade | Rascunho na Fase 8, publicação depois de revisão humana |
| Primeiro jogo real | Ainda não há pacote. A Fase 4 cria um jogo mínimo original no repositório |
| Conta AdSense | Fora da Fase 1. Anúncio nasce desligado |
| Script gerador de páginas | Fora da Fase 1. Páginas iniciais são escritas à mão |

## Fora destas decisões

Não há serviço pago, conta de anúncio, domínio registrado nem servidor de produção escolhidos.
