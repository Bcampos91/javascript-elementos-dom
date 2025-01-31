
const html = document.querySelector('html')
const botaoIniciar = document.querySelector('#start-pause')
const focoBt = document.querySelector('.app__card-button--foco ');
const curtoBt = document.querySelector ('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const temporizador = document.querySelector('.app__card-timer')
const imagens = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const tempFoco = '1500'
const tempDescansoCurto = '300'
const TempDescansoLongo = '900'
const banner = document.querySelector('#imagem')
const botoes = document.querySelectorAll('.app__card-button')//para selecionar mais de um elemento 
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio ('sons/luna-rise-part-one.mp3');
musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')//add class
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')//add class
})
    

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')//add class
})
function alterarContexto(contexto){
    botoes.forEach(function (contexto){//para selecionar cada um dos elementos ao clicar
    contexto.classList.remove('active')//para remover class
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src',`imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML =`
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?,<br>
                <strong class="app__title-strong">Faça uma pausa curta</strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar á superficie,<br>
                <strong class="app__title-strong">Faça um descanso longo.</strong>`        
        default:
            break;
    }
}






