# 07 — Monetização

Objetivo: espaço de anúncio previsível, que possa receber Google AdSense e, mais tarde, vídeo ou recompensado, sem prejudicar o jogo nem violar a rede e a LGPD.

## Princípio

Um único script, `js/ads.js`, lê `data/ads.json`. Com `enabled: false`, ele só desenha o retângulo e o rótulo “Publicidade”.

Produção só carrega script da rede quando as três condições são verdadeiras:

1. `enabled` é `true` em `data/ads.json`.
2. `clientId` está preenchido com o identificador real da conta.
3. O consentimento do visitante permite anúncio que use cookie ou identificador. Sem consentimento, o slot fica vazio.

Configuração inválida não dispara o script. Um id de exemplo no código não conta como configuração válida.

## Onde o anúncio aparece

| Slot | Página | Posição |
| --- | --- | --- |
| `home_inline` | Home | Entre a primeira e a segunda faixa de jogos |
| `catalog_inline` | Categoria | Depois da primeira fileira de cards |
| `game_below_player` | Jogo | Abaixo do player, separado dos controles |
| `game_side` | Jogo | Coluna lateral no desktop; abaixo do conteúdo no celular |

Fora desta lista não há anúncio na primeira versão. Não há anúncio sobre o canvas, no botão de jogar, no botão de tela cheia nem no meio do toque do jogo.

Cada slot reserva altura mínima. O rótulo “Publicidade” fica visível. O placeholder usa borda tracejada e fundo de superfície, diferente do botão primário.

## Redes

| Momento | Comportamento |
| --- | --- |
| Desenvolvimento e primeira publicação | Placeholder |
| Conta AdSense aprovada e `ads.json` ligado | Display responsivo nos quatro slots |
| Futuro | Vídeo só em slot que não tapa o jogo |
| Futuro | Recompensado só se o jogador pedir e o jogo puder pausar |

O HTML da ficha não muda quando a rede mudar. Muda `js/ads.js`.

## Consentimento e privacidade

Banner curto, em português, antes de carregar anúncio não essencial. Ações: aceitar e recusar, com o mesmo destaque visual. A escolha fica em `localStorage` e pode ser refeita por um link no rodapé.

O texto jurídico final depende de revisão humana. A página `/privacidade/` explica o que o site guarda neste navegador. A Fase 8 usa um texto marcado como rascunho até o responsável aprovar.

Jogo ou categoria com `childDirected: true` não pede anúncio personalizado. O slot dessa página permanece desligado para AdSense personalizado. Educativos nascem com essa marca ligada.

## Políticas que o layout já cumpre

- O anúncio é distinguível do jogo e dos botões.
- Não há incentivo para clicar no anúncio.
- O player não dispara clique de anúncio.
- Página sem conteúdo publicado não recebe anúncio.
- `enabled: false` não chama domínio de rede de anúncios.

## Operação

Desligar o anúncio é gravar `enabled: false` e publicar os arquivos de novo. Receita e impressões ficam no painel da rede. O Zuplay não guarda meta de cliques.
