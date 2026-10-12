# Progresso

Estado: **Fase 4 concluída em 12 de outubro de 2026. Aguardando aprovação para a Fase 5.**

Corrida do Bosque está publicado e abre no iframe. O botão de tela cheia fica para a fase seguinte.

## Fase 0 — Planejamento e documentação

- [x] Inspecionar o repositório. Resultado: na primeira passagem, diretório vazio. O pai `projetos` é um repositório Git de outros projetos.
- [x] Registrar visão, anúncios, SEO, segurança e roadmap.
- [x] Revisar a arquitetura de Next.js e Django para páginas estáticas e iframe. Decisão do responsável pelo projeto em 12 de outubro de 2026.
- [x] Trocar a modelagem de banco pelo contrato de `data/games.json`.
- [x] Atualizar `AGENTS.md` e este arquivo.

Validação: leitura cruzada dos documentos (rotas, slots de anúncio, status do jogo, sandbox e regra de publicação). Não há teste automatizado porque não há site.

## Fase 1 — Esqueleto

- [x] `index.html`, `css/site.css` e `js/site.js`.
- [x] Pastas `data/`, `assets/`, `jogos/`, `categorias/` e `js/`.
- [x] Home aberta com `python -m http.server 8765` na pasta do projeto. URL: `http://127.0.0.1:8765/`.

Validação: `index.html`, CSS e JS responderam 200. O Edge headless renderizou o H1 “Zuplay”, o slogan e `data-zuplay="ready"`, então o script rodou. O `Invoke-WebRequest` do PowerShell mostrou o “ã” errado no console; o arquivo está em UTF-8 e o navegador exibiu “Diversão sem limites!”.

## Fase 2 — Visual

- [x] Tokens de cor, tipo e raio, nos modos claro e escuro. Contraste AA conferido.
- [x] Cabeçalho, busca, categorias e rodapé.
- [x] Card e grade 16:9 na página `/preview/`, com amostras marcadas como demonstração.
- [x] Estados de carregamento, vazio e erro.
- [x] Verificado no Edge em 1280 px e em viewport de 390 px, inclusive o botão de tema.

As categorias abrem uma página vazia com `noindex`, para a navegação não cair em erro. A busca abre o estado vazio e ainda não consulta o catálogo. Sobre, contato, privacidade e termos são textos curtos, também com `noindex`. O link de cookies fica para a fase do banner.

## Fase 3 — Home

- [x] Faixas Destaques, Populares, Adicionados recentemente, Recomendados e Mais jogados, com cards fictícios marcados como demonstração.
- [x] Cada card abre a categoria correspondente, que mostra a mesma amostra.
- [x] A grade está no HTML. Conferida no Edge em 1280 px e em 390 px.

O clique em “Sombra no Beco” abriu `/categorias/acao/` com esse título. Nenhuma arte ou jogo de terceiro entrou.

## Fase 4 — Catálogo e ficha

- [x] `data/categories.json` e `data/games.json`, com licença verificada em Corrida do Bosque.
- [x] Jogo original em `jogos/corrida-do-bosque/play/index.html`.
- [x] Ficha com texto, capa e iframe em sandbox. A categoria Corrida aponta para ela.
- [x] URL publicada em `sitemap.xml`. Conferida no Edge em 1280 px e em 390 px.

O placar do jogo passou de zero sozinho e o iframe não deixa a página ler o documento interno. As outras faixas da home continuam como demonstração.

A capa desenhada foi retirada da ficha. O botão Tela cheia fica acima do jogo e, no celular, ocupa a largura da tela. O restante da Fase 5 segue pendente.

## Fase 5 — Player

- [ ] Iframe com sandbox, tela cheia, erro e relacionados.

## Fase 6 — Busca e favoritos

- [ ] Busca no JSON e favoritos locais.

## Fase 7 — SEO

- [ ] Metadados, sitemap, robots e JSON-LD.

## Fase 8 — Publicidade

- [ ] Placeholders e consentimento. AdSense desligado.

## Fase 9 — Publicação

- [ ] Acessibilidade, revisão e documento de hospedagem. Deploy só com aprovação extra.

## Pendências

- O código fica em [diegowalhernandes/zuplay](https://github.com/diegowalhernandes/zuplay), fora do Git de `projetos`.
- A Fase 1 seguiu o padrão de [10-DECISOES-TECNICAS.md](10-DECISOES-TECNICAS.md).
