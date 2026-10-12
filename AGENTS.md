# AGENTS.md — regras permanentes do Zuplay

Este arquivo vale para qualquer pessoa ou agente que altere o repositório. Leia este arquivo e [docs/PROGRESSO.md](docs/PROGRESSO.md) antes de começar uma tarefa.

## Produto

Zuplay é um portal estático de jogos HTML5, em português (pt-BR). A pessoa joga no navegador. A página do jogo é HTML do Zuplay. O jogo em si abre num iframe.

A monetização inicial é publicidade (Google AdSense e formatos compatíveis). Até existir configuração válida e consentimento, o espaço do anúncio é um placeholder.

Identidade visual própria: roxo, azul elétrico, amarelo de destaque, fundo claro e modo escuro opcional. A usabilidade pode se inspirar em portais de jogos conhecidos. Marcas, layout proprietário, jogos e imagens de terceiros ficam de fora sem licença.

## Stack vigente

HTML, CSS e JavaScript. Catálogo em `data/games.json` e `data/categories.json`. Sem Next.js, Django, banco, Redis ou Docker, salvo decisão nova registrada em [docs/10-DECISOES-TECNICAS.md](docs/10-DECISOES-TECNICAS.md).

## Fases

1. Execute somente a fase autorizada.
2. Não avance sem aprovação explícita do responsável pelo projeto.
3. Quebre o trabalho em tarefas pequenas e verificáveis.
4. Atualize [docs/PROGRESSO.md](docs/PROGRESSO.md) ao concluir cada tarefa.
5. Registre decisões de arquitetura em [docs/10-DECISOES-TECNICAS.md](docs/10-DECISOES-TECNICAS.md).
6. Não implemente funcionalidade fora da fase.
7. Não faça deploy em produção sem aprovação explícita.
8. Se uma decisão de negócio mudar o produto, pare e peça orientação.

## Código

- Preserve código que já funciona. Troque só o que a tarefa pede.
- Não adicione framework, bundler ou dependência sem decisão registrada.
- Documentação e interface em português (pt-BR).
- Não afirme que algo funciona sem ter aberto no navegador ou executado a verificação descrita na tarefa.
- Explique a causa de um erro e corrija dentro do escopo autorizado.

## Conteúdo e anúncios

- Um jogo só entra no sitemap com licença preenchida e `verified: true` no catálogo.
- Não incorpore jogo de terceiro sem licença.
- Não use imagens, logos ou nomes de marcas de portais concorrentes.
- A home e a ficha do jogo são páginas do Zuplay. O iframe não substitui esse HTML.
- Anúncios reais só carregam com identificador válido e, quando a lei ou a rede exigir, com consentimento.
- Em desenvolvimento, o espaço de anúncio é placeholder visual.
- O anúncio não pode imitar botão ou controle do jogo.
- Categorias ou jogos com `childDirected: true` não recebem anúncio personalizado.

## Segurança

- O iframe do jogo usa `sandbox` sem `allow-same-origin`, salvo exceção registrada para um jogo concreto.
- URL de parceiro só entra se `embed.mode` for `partner`, a licença autorizar embed e o host estiver em `data/embed-domains.json`.
- O site não carrega script de anúncio enquanto `data/ads.js` estiver desligado.
- Não há backend nesta versão. Não invente API, painel ou banco no meio de uma fase de página estática.

## Encerramento de fase

Ao terminar uma fase, informe: fase executada, resumo, arquivos, validação, pendências e próxima fase. Encerre perguntando se pode avançar para a próxima fase.
