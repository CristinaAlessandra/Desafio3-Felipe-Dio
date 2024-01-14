# Escrevendo as classes de um Jogo 🎮

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado *atacar* que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

|   Tipo    |            Ataque            |
| :-------: | :--------------------------: |
|   mago    |     exibir (usou magia)      |
| guerreiro |     exibir (usou espada)     |
|   monge   | exibir (usou artes marciais) |
|   ninja   |    exibir (usou shuriken)    |

## Saída

Ao final deve se exibir uma mensagem:

- **"o {tipo} atacou usando {ataque}"**
  
- mago atacou usando magia

- guerreiro atacou usando espada