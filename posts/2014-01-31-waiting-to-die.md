---
title: Exemplos práticos e Avançados de SCSS ou Sass
description: Vamos aprender a usar o Sass na prática com alguns exemplos
  práticos de SCSS e compartilho com você um projetilzinho legal.
date: "2020-04-08 11:52:00"
category: svg
background: "#7d669e"
image: /assets/img/cover.png
thumbnail: assets/img/scss.png
---
E ai negada? de boas? Vamos conversar hoje sobre um assunto que eu gosto muito. Então aperte o cinto!

### O que é um pré-processador?

Mas Antes de tudo, você deve entender que um pré-processado Sass é: Um programa que recebe texto e converte em CSS. Ou seja, você consegue "programar no CSS" e no fim tudo é convertido para CSS.

### Mas e o que é o Sass?

> Sass é uma extensão de CSS que adiciona novas possibilidades e elegância à linguagem base.

Da pra criar variáveis, fazer laços de repetição, funções e muito mais.

### Mas... você sabe a diferença entre SCSS ou Sass?

O Sass tem a sua própria sintaxe com sensibilidade à indentação, não possui ponto e virgula nem chaves, Já o **SCSS o** lema é: se é CSS válido, também é um SCSS valido.

## Instalando

Para instalar o Sass mas executar no terminal

`npm install -g sass`

Com isso já é possível pegar um arquivo .scss e converter em css, veja o comando a baixo, onde passamos no primeiro parâmetro o **código de origem** depois onde o **código gerado** deve ficar, já o **\-w** é para identificar as alterações.

`sass source/index.scss    build/index.css   -w`

Agora estamos preparados e podemos começar a brincadeira brincar.

## As variáveis ​​também podem ser expandidas nos seletores:

```scss
$alert-class: "error";

p.message-#{$alert-class} {
    color: red;
}

/* compiled CSS */
p.message-error {
  color: red;
}
```

## Diretivas de controle

Condicionais e controle de fluxo, como **@if**:

```scss
$debug: false; 

article {
    color: black;

    @if ($debug) {
        border: 1px dotted red;
    }
}
/* compiled CSS */
article {
  color: black;
}
```

### Também existem as diretivas de repetição como `@for`,`@each e` `@while`. Veja o exemplo:

```scss
@each $name in 'save' 'cancel' 'help' {
    .icon-#{$name} {
        background-image: url('/images/#{$name}.png');
    }
}
/* compiled CSS */
.icon-save {
  background-image: url("/images/save.png");
}
.icon-cancel {
  background-image: url("/images/cancel.png");
}
.icon-help {
  background-image: url("/images/help.png");
}
```

## \

Tipo de dados em lista

Pois é senhoras e senhores, é possível usar 

```scss
$buttonConfig: 'save' 50px, 'cancel' 50px, 'help' 100px; // TODO: move to _settings.scss

@each $tuple in $buttonConfig {
    .button-#{nth($tuple, 1)} {
        width: nth($tuple, 2);
    }
}
/* compiled CSS */
.button-save {
  width: 50px;
}
.button-cancel {
  width: 50px;
}
.button-help {
  width: 100px;
}
```

## \

Definindo Funções Customizadas

```scss
@function make-greener($value) {
    @return $value + rgb(0,50,0); // arithmetic with colors is totally fine, btw
}
p {
    background: make-greener(gray);
}
/* compiled CSS */
p {
  background: #80b280;
}
```

\
Então esse são alguns exemplos interessantes do que pode ser feito com SCSS o que acharam???\
\
Agora vamos falar sobre como organizar toda essa bagunça.

## Arquitetura

Criar a arquitetura de um projeto de CSS é uma das coisas mais difíceis que se pode fazer durante a vida de um projeto. Manter essa arquitetura constante e significativa é ainda mais difícil.

### \

O Padrão 7-1

*O padrão 7-1*: 7 pastas, 1 ficheiro. Basicamente, tudo o que tens são ficheiros parciais colocados em 7 pastas diferentes, e um único ficheiro na raiz do projeto (normalmente chamado`main.scss`) que importa todos os ficheiros parciais para serem compilados numa única folha de estilo de CSS.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `abstracts/`
* \`vendors/\`

## Exemplo irado:

Caso queira vê um exemplo em um projeto na pratica veja no github um[ projeto que exemplifica como fazer um botão com vários tamanhos e cores.](https://github.com/joaowillamy/Advance-Sass)

E é isso ai pessoal, obrigado!!!

Até a próxima.

``

``