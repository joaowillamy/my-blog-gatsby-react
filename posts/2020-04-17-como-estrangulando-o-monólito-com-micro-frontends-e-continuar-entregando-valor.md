---
title: Como estrangular o monólito com micro-frontends?
description: "Vamos discutir sobre: como sair do monólito?  Como continuar
  entregando valor? E como o micro-frontends pode ajudar?"
date: "2020-04-16 06:42:37"
category: dev
background: "#637a91"
image: assets/img/1_jo_lcfjbso70mfeomd9nga.png
---
Vamos tentar responder a primeira pergunta:

## Como sair do monólito?

O monolítica é aquela aplicação que toda a base de código está tudo em um só lugar. Ou seja, as visões, regra negocio, dados e todas as funcionalidades estão definidas no mesmo bloco. E as vezes para o projeto continuar evoluindo, para dividir em times, conseguir dá manutenção é preciso estrangular o projeto ou começar um novo:

* **Big Bang (A criação)**

  * Quando escolhemos migrar um sistema legado do zero. A vantagem é que  podemos escolher as tecnologias que desejamos, não nos preocupamos com código legado, parece ótimo né?
  * Porém, existem desvantagens, pois o risco é alto já que os recursos não documentados podem ser perdidos. Além disso agora temos 2 projetos para evoluir ao mesmo tempo. Ou um dos projetos não receberá mais atualização.
* **Estrangulamento**

  * Consiste em migrar constantemente um sistema legado, a principal vantagem é que permite agregar valor continuamente.
  * Porém, levamos mais tempo para estrangular o monólito, pois temos que lidar com a lógica existente, ao passo que adicionamos novas tecnologias.
* **Mas será que consigo usar a tecnologia que eu desejo, continuar entregando valor e no futuro eliminar totalmente o monólito? Vamos vendo...**

## Como o micro-frontends pode ajudar?

Ainda é recente e não tem nada muito formal sobre isso, complicado até de conceituar, e cada empresa tem seu próprio jeito de fazer. Mas podemos entender assim: **Ao invés de ter que lidar com um único monstro, vamos dividi-lo em pequenos "monstrinhos".**

### **O objetivo**

* Um suporte para permitir **coexistir** diferentes estruturas de frontend, por exemplo, módulos mais antigos construídos em JQuery ou AngularJS 1.x, combinados com módulos mais recentes construídos em React ou Vue, podem coexistir numa mesma aplicação.
* Além de poder dividir problemas **times** e cada equipe pode evoluir a aplicação em paralelo. Por exemplo, imagine que uma pagina de uma aplicação têm 3 componentes complicados: Chat, time-line e e-commerce. São 3 problemas, logo 3 times que podem trabalhar com tecnologias diferentes e totalmente isoladas. 

![Micro-frontend](assets/img/1_jo_lcfjbso70mfeomd9nga.png "Micro-frontend")

> É de suma importância ter o mínimo possível de planejamento ao aplicar uma das estrategias, uma vez que estamos tentando *remover* pontos de falha, e não adicionar mais.

É possível colocar varias tecnologias diferentes na mesma pagina, mas o cuidado que se deve ter é da quantidade de arquivos baixados pelo o usuário isso pode comprometer a experiencia. 

\
Vou listar algumas das formas de se criar micro-frontends tendo como base alguns cases de sucesso:

* O Spotify usa micro-frontends em seu aplicativo de desktop, aproveitando iframes para costurar partes diferentes da mesma visualização. O problema é o não compartilhamento de status entre os elementos da pagina. [Veja mais](https://medium.com/dazn-tech/adopting-a-micro-frontends-architecture-e283e6a3c4f3).
* A Airbnb usou a lib *hypernova* no ruby juntamente com o react uma estrategia bem especifica para o problemas deles de SEO. Pois as paginas são renderizadas no lado do servidor (**Server**-**side rendering -** SSR). [Veja mais](https://github.com/airbnb/hypernova).
* Uma abordagem muito, MUITO BOA, é o uso do  “meta framework” **single-spa** [veja essa demo](https://single-spa.surge.sh/) Sendo um framework  javascript para front-end. [Veja Mais](https://github.com/single-spa/single-spa).
* Web Components.

Existem varias abordagens diferentes, porém deve-se ter em mente o problema que deseja resolver e o cuidado para não criar um problema ainda maior. 

Por hoje é só pessoal...