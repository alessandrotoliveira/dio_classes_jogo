# 🛡️ Classes de um Jogo - Hero RPG

Este projeto é um exercício de Lógica de Programação focado em **Programação Orientada a Objetos (POO)**. O objetivo foi criar uma classe genérica para representar heróis de uma aventura e definir seus ataques baseados em suas classes (Mago, Guerreiro, Monge e Ninja).

## 🚀 Tecnologias

- JavaScript

## 📋 Desafio

O código implementa:
1. Uma classe **Heroi** com as propriedades: `nome`, `idade` e `tipo`.
2. Um método **atack()** que exibe uma mensagem diferente dependendo da classe do herói:
   - 🧙‍♂️ Mago -> usa "magia"
   - ⚔️ Guerreiro -> usa "espada"
   - 🥋 Monge -> usa "artes marciais"
   - 🥷 Ninja -> usa "shuriken"

## 💻 Exemplo de Uso

```javascript
// Criando um Mago
const heroi1 = new Heroi("Gandalf", 2000, "Mago");
heroi1.atack(); 
// Saída: "o Mago atacou usando magia"

// Criando um Ninja
const heroi2 = new Heroi("Naruto", 16, "Ninja");
heroi2.atack(); 
// Saída: "o Ninja atacou usando shuriken"

📚 Aprendizados
Estrutura de Classes e Construtores em JavaScript.

Criação e instância de Objetos.

Estruturas de decisão (switch/case) para lógica de jogo.
