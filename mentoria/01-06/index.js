import axios from "axios";
import fetch from 'node-fetch';

/**
 *  Mapeando URLs:
 *  Rick and Morty: https://rickandmortyapi.com/api/location/61
 *  Traduções divertidas: https://api.funtranslations.com/translate/
 */

// (async function buscaPersonagensRickAndMortyFetch() {
//     const response = await fetch('https://rickandmortyapi.com/api/character');

//     const dados = await response.json();

//     console.log(dados);
// })();

(async function buscaPersonagensRickAndMortyAxios() {
    const response = await axios.get('https://rickandmortyapi.com/api/character');

    console.log(response.data);
})();
