---
title: "Definindo as cores do Design System em 4 horas!"
tags: [design-system, ui, acessibilidade, figma, app-guardiao]
---

# Definindo as cores do Design System em 4 horas!

## Contexto: caos controlado

Tudo começou como sempre: acúmulo absurdo de atividades para entregar e apenas um fim de semana para tentar dar conta.

Então vamos por partes, porque para montar as cores de um design system em 4 horas, na verdade nós passamos horas debatendo tudo, desde o conceito que iríamos usar como logo até problemas do tipo:

> "O professor de mobile é daltônico e as cores que escolhemos não vão funcionar!"

Mas vamos definir algumas coisas básicas aqui.

Primeiro de tudo, o design system (DS) é um produto que vai servir para outro produto, no caso, o App Guardião. Ou seja, esse DS precisa funcionar e ser útil.

E estamos na jornada de usar esse DS no app, mas para isso é preciso definir uma série de coisas que compõem o nosso DS, como cor, tipografia, ícones, animações e tantas outras coisas que em uma empresa séria costumam ficar a cargo do UX design.

Existem diversas formas de começar, e assim começamos escolhendo as cores.

E que comece o caos!

---

## Escolhendo as cores

Sim, a nossa logo é um lindo duotone (ou seja, usamos duas cores).

E na prática, no mundo digital, com telas emitindo uma quantidade absurda de luz, é bem difícil fazer uma boa mescla entre elas.

Então, o que foi feito?

Já que gostamos das cores, uma solução é usar uma das cores do duotone como cor primária e outra como secundária (ou cor de acento).

Simplificando as coisas, utilizamos a regra dos 60/30/10 (saiba mais aqui: <https://www.alura.com.br/artigos/regra-60-30-10-ui-design>) e usamos 60% para as cores de fundo do tema claro e do tema escuro.

Na verdade, primeiro selecionamos a cor clara a partir das duas cores que já tínhamos idealizado na logo do app para gerar algumas opções de cores claras e, com a cor clara definida, seguimos para a cor escura.

Todo esse processo de definir as cores primária e secundária e depois gerar a cor clara foi feito com o site <https://coolors.co/?home>, que gera algumas paletas de cores.

### Imagem 1 - Geração de cores a partir de cores primárias

As cores definidas no Coolors podem ser travadas com cadeado para manter tons fixos enquanto novas variações são geradas.

![Imagem 1 - Geração de cores a partir de cores primárias](../assets/images/coresds/imagem-1-geracao-cores.png)

Link da paleta usada: <https://coolors.co/1d3a70-f8333c-f5f3f5-379634-19c3c3>

---

## Documentando no Figma

Para documentar tudo isso, lá no Figma tem uma página que foi criada. Usando o plugin Color Card dá para ter uma ideia inicial, pelo menos das principais cores do app.

### Imagem 2 - Hierarquia das cores

![Imagem 2 - Hierarquia das cores](../assets/images/coresds/imagem-2-hierarquia-cores.png)

### Imagem 3 - Escolha da cor para o tema claro

![Imagem 3 - Escolha da cor para o tema claro](../assets/images/coresds/imagem-3-escolha-tema-claro.png)

Mas não existe app no mundo que se sustente apenas com 3 cores.

---

## Cores semânticas e acessibilidade

No design se usam bastante cores semânticas para indicar algumas informações básicas passadas visualmente pelo sistema para o usuário:

- sucesso
- erro
- avisos
- informações

E mais cores significam mais problemas de contraste e, principalmente, de acessibilidade.

Para escolher cada uma das cores semânticas, além de voltar ao <https://coolors.co/?home>, agora é preciso usar mais duas ferramentas voltadas para teste de contraste e acessibilidade:

- WebAIM Contrast Checker  
  <https://webaim.org/resources/contrastchecker/>

- Adobe Color Contrast Analyzer  
  <https://color.adobe.com/create/color-contrast-analyzer>

Cada uma das cores só foi escolhida depois de passar nos testes de contraste de objetos gráficos e componentes da interface do usuário.

### Imagem 4 - Testes de acessibilidade por contraste

Ferramenta utilizada: <https://webaim.org/resources/contrastchecker/>

![Imagem 4A - Teste de contraste no WebAIM](../assets/images/coresds/imagem-4-contraste-a.png)

![Imagem 4B - Teste de contraste no WebAIM](../assets/images/coresds/imagem-4-contraste-b.png)

Com isso, finalmente chegamos à paleta de cores básicas.

### Imagem 5 - Paleta de cores final

![Imagem 5 - Paleta de cores](../assets/images/coresds/imagem-5-paleta-cores.png)

---

## Tokens semânticos

E dela podemos finalmente destrinchar tokens semânticos, que são muito úteis na criação de biblioteca de código.

Basicamente, tokens semânticos são informações de como um determinado elemento é usado num DS ou numa biblioteca de códigos.

Por exemplo, ao invés de ficar colocando a cor azul para um botão e uma cor branca como texto dentro do botão, podemos simplesmente referenciar `primary` para a cor e `onPrimary` para qualquer coisa que vai ficar acima da cor primária, como um texto ou um ícone.