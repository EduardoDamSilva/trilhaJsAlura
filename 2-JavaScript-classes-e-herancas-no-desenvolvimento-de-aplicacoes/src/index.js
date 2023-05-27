import { Personagem } from './modules/personagem.js';
import { PersonagemView } from './components/personagem-view.js';
import { Mago } from './modules/mago.js';
import { Arqueiro } from './modules/arqueiro.js';
import { ArqueiroMago } from './modules/arqueiro-mago.js';

const magoCaio = new Mago('Caio', 4, 'fogo', 4, 3);
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroIgor = new Arqueiro('Igor', 10, 10);
const arqueiroMagoJoao = new ArqueiroMago('Joao', 10, 10, 'fogo', 10, 10);

const personagens = [magoCaio, magaJulia, arqueiroIgor, arqueiroMagoJoao]

new PersonagemView(personagens).render()