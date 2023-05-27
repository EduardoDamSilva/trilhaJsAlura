import { Personagem } from './modules/personagem.js';
import { PersonagemView } from './components/personagem-view.js';
import { Mago } from './modules/personagem.js';

const personagemEduardo = new Personagem('Eduardo', 5, 'Mago')
const personagemPedro = new Personagem('Pedro', 10, 'Arqueiro')

const personagens = [personagemPedro, personagemEduardo]

new PersonagemView(personagens).render()