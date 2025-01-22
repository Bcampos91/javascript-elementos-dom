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
const banner = document.querySelector('.app__image')

focoBt.addEventListener('click',() => {
    html.setAttribute('data-contexto','foco')
    banner.setAttribute('src','imagens/foco.png')
    frase.setAttribute('Otimize sua produtividade','bcshcbhscb')
})

curtoBt.addEventListener('click',() => {
    html.setAttribute('data-contexto','descanso-curto')
    banner.setAttribute('src','imagens/descanso-curto.png')
    switch (contexto) {
        case "foco":
            titulo.innerHTML =` Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            
            break;
    
        default:
            break;
    }

longoBt.addEventListener('click',()=> {
    html.setAttribute('data-contexto','descanso-longo')
    banner.setAttribute('src','imagens/descanso-longo.png')
})







