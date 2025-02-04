const focoBt = document.querySelector('.app__card-button--foc');
const curtoBt = document.querySelector ('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const html = document.querySelector('html')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio ('sons/luna-rise-part-one.mp3');
musica.loop = true

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener('click', () => {
   alterarContexto('foco')
   focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
   alterarContexto('descanso-curto')
   curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
   alterarContexto('descanso-longo')
   longoBt.classList.add('active')
})

function alterarContexto(contexto){
   botoes.forEach(function (contexto){//para selecionar cada um dos elementos ao clicar
   contexto.classList.remove('active')//para remover class
   })
}