# 01 — Visão do produto

## O que é

Zuplay é um portal de jogos HTML5 gratuitos. A pessoa abre o site no computador, tablet ou celular, escolhe um jogo e joga no navegador, sem instalar nada.

Slogan: **Diversão sem limites!**

A navegação segue o hábito de portais grandes: busca, categorias, grade de cards e uma página por jogo. A marca, a paleta, os textos e o HTML são do Zuplay.

O jogo novo da semana entra como mais uma ficha no site. A ficha tem texto original e um iframe apontando para o pacote daquele jogo.

## Para quem

- Jogadores casuais.
- Adolescentes e adultos.
- Expansão futura para jogos educativos e infantis, com anúncio mais restrito.

## Como ganha dinheiro

Receita inicial: publicidade.

1. Google AdSense, quando a conta existir e o site cumprir as políticas da rede.
2. Anúncios display em posições fixas da home, da categoria e da página do jogo.
3. Vídeo, quando houver rede compatível e autorização.
4. Anúncio recompensado, quando o formato existir e o jogo puder pausar com um pedido claro do jogador.
5. Parcerias com desenvolvedores, depois que o catálogo e os direitos estiverem organizados.

Até a configuração real existir, a interface mostra apenas o espaço reservado do anúncio. Detalhes em [07-MONETIZACAO.md](07-MONETIZACAO.md).

## Promessa de experiência

- Achar um jogo em poucos toques no celular.
- Card com imagem grande, nome legível e categoria visível.
- Página do jogo com descrição original, como jogar, controles e player.
- Busca por nome neste navegador, sobre o catálogo publicado.
- Favoritos neste dispositivo, sem criar conta.
- HTML da ficha já presente no arquivo, visível para a busca orgânica.

## Ritmo de publicação

Toda semana pode entrar um jogo novo. O trabalho é acrescentar o pacote, a capa, o texto e o registro no catálogo, e então atualizar a home, a categoria, os relacionados e o sitemap. O checklist está em [02-ARQUITETURA.md](02-ARQUITETURA.md).

## Escopo da primeira versão

Entra:

- Home com destaques, populares, recentes, recomendados e mais jogados.
- Dez categorias iniciais, cada uma com página, título, descrição e SEO próprios.
- Página do jogo com player em iframe, tela cheia e jogos relacionados.
- Busca local, estado vazio e favoritos no navegador.
- Catálogo em JSON, com licença, SEO, status e posições da home.
- SEO técnico: metadados, canonical, sitemap, robots, Open Graph, dados estruturados e breadcrumbs.
- Placeholders de anúncio.

Fica para depois:

- Conta de usuário e favoritos sincronizados.
- Painel administrativo.
- Banco de dados e API.
- Sugestões de busca.
- Anúncio em vídeo e recompensado de verdade.
- Vários idiomas.
- Aplicativo nativo.

Esses itens só voltam se uma decisão nova for registrada. A primeira versão não deixa ganchos de framework “para o caso de precisar”.

## Categorias iniciais

Ação, Aventura, Corrida, Esportes, Puzzle, Estratégia, Multiplayer, Arcade, Educativos e Jogos de dois jogadores.

Cada categoria tem uma página indexável. Tags organizam o jogo e, nesta versão, não ganham página própria.

## Página do jogo

Cada jogo tem nome, slug único, descrição original, thumbnail, capa, categoria principal, tags, desenvolvedor, instruções, controles, compatibilidade mobile, player, tela cheia, jogos relacionados e área de anúncio.

Estados no catálogo: `draft`, `published` e `disabled`.

Publicar exige conteúdo mínimo e licença verificada. A regra está em [04-MODELAGEM-DADOS.md](04-MODELAGEM-DADOS.md).

## Critério de sucesso da primeira versão

- A home abre num servidor estático local e no celular.
- Um jogo de demonstração, feito no repositório e com licença registrada, abre no iframe.
- A categoria lista esse jogo.
- A busca encontra o jogo pelo nome.
- O favorito continua neste navegador depois de recarregar.
- O sitemap lista só páginas publicadas.
- O anúncio aparece como placeholder e não carrega script de rede.

## Fora de questão

- Copiar interface, ícones, textos ou catálogo de outro portal.
- Publicar jogo sem origem e direito de uso.
- Fazer a home ou a ficha serem apenas um iframe de outro site.
- Colocar anúncio por cima dos controles ou com aparência de botão de jogar.
- Indexar busca, favoritos, rascunhos e combinações de filtro.
