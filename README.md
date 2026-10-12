# Zuplay

Portal de jogos HTML5 gratuitos, jogáveis no navegador. Slogan: **Diversão sem limites!**

Cada jogo entra numa página do próprio site, com texto, capa e anúncio. O jogo abre num iframe. A home lista os cards e aponta para essas páginas. Jogos, marcas e imagens de terceiros só entram com licença registrada no catálogo.

## Estado

Fase 4 concluída em 12 de outubro de 2026: Corrida do Bosque é o primeiro jogo jogável, em `/jogos/corrida-do-bosque/`. A pré-visualização dos componentes fica em `/preview/`.

Código em [github.com/diegowalhernandes/zuplay](https://github.com/diegowalhernandes/zuplay). Andamento em [docs/PROGRESSO.md](docs/PROGRESSO.md). Regras permanentes: [AGENTS.md](AGENTS.md).

Na pasta do projeto:

```text
python -m http.server 8765
```

Abra `http://127.0.0.1:8765/`. A busca do JSON, nas fases seguintes, precisa desse servidor. Abrir o arquivo direto no disco não serve.

## Documentação

| Documento | Conteúdo |
| --- | --- |
| [01-VISAO-PRODUTO.md](docs/01-VISAO-PRODUTO.md) | Produto, público, monetização e escopo |
| [02-ARQUITETURA.md](docs/02-ARQUITETURA.md) | Pastas, iframe, catálogo e hospedagem |
| [03-DESIGN-SYSTEM.md](docs/03-DESIGN-SYSTEM.md) | Cores, tipo, HTML e CSS |
| [04-MODELAGEM-DADOS.md](docs/04-MODELAGEM-DADOS.md) | Campos do catálogo em JSON |
| [05-API.md](docs/05-API.md) | Contrato de `data/games.json` (não há servidor) |
| [06-SEO.md](docs/06-SEO.md) | URLs, metadados, sitemap e desempenho |
| [07-MONETIZACAO.md](docs/07-MONETIZACAO.md) | Anúncios, consentimento e política de cliques |
| [08-SEGURANCA.md](docs/08-SEGURANCA.md) | Sandbox do iframe e scripts de terceiros |
| [09-ROADMAP.md](docs/09-ROADMAP.md) | Fases 0 a 9 em tarefas pequenas |
| [10-DECISOES-TECNICAS.md](docs/10-DECISOES-TECNICAS.md) | Decisões registradas e pendências |
| [PROGRESSO.md](docs/PROGRESSO.md) | O que já foi feito e o que está bloqueado |

## Stack

HTML, CSS e JavaScript no navegador. O catálogo é um arquivo JSON versionado junto com as páginas. Qualquer hospedagem de arquivos estáticos serve o site. Não há runtime de aplicação.

## Como o trabalho avança

Uma fase por vez. Cada fase termina com resumo, arquivos, validação e a pergunta de aprovação antes da seguinte.
