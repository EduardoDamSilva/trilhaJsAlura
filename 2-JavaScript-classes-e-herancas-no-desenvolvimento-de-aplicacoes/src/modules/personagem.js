export class Personagem {
  nome
  vida = 100;
  mana = 100
  level
  tipo
  descricao

  constructor(nome, level, tipo) {
    this.nome = nome
    this.level = level
    this.tipo = tipo
    this.vida = 100
    this.mana = 100
  }

  obterInsignia() {
    if (this.level >= 5){
        return `${this.tipo} Implácavel`
    }
    return `${this.tipo} Iniciante`  
  }
}

