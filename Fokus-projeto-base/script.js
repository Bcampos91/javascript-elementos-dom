
const html = document.querySelector('html');
const botaoIniciar = document.querySelector('#start-pause')
const focoBt = document.querySelector('.app__card-button--foco ');
const curtoBt = document.querySelector ('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const temporizador = document.querySelector('.app__card-timer')
const imagens = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const tempoNaTela = document.querySelector('#timer')
const iniciarOuPauseBticone = document.querySelector ('.app__card-primary-butto-icon')
const banner = document.querySelector('#imagem')
const botoes = document.querySelectorAll('.app__card-button')//para selecionar mais de um elemento 
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio ('sons/luna-rise-part-one.mp3');
const startPauseBt = document.querySelector('#start-pause')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const comecar = new Audio ('sons/play.wav');
const zero = new Audio('sons/beep.mp3');
const pause =new Audio('sons/pause.mp3');

let tempoDecorridoEmSegundos = 1500 ;//Alterando o cronômetro do temporizador
let intervaloid = null
musica.loop = true;



musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500//Alterando o cronômetro do temporizador
    alterarContexto('foco')
    focoBt.classList.add('active')//add class
    
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300//Alterando o cronômetro do temporizador
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')//add class
    
})
    

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900//Alterando o cronômetro do temporizador
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')//add class
    
})
function alterarContexto(contexto){
    mostrarTempo()
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
//Iniciando a contagem regressiva automaticamente;

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        zerar()
        zero.play()
        return
    }
    tempoDecorridoEmSegundos -= 1
   mostrarTempo()
}
// Pausando a contagem regressiva a partir do clique;
startPauseBt.addEventListener('click',iniciarOuPausar)

//Controlando o temporizador com som;
function iniciarOuPausar(){
    if(intervaloid){
        pause.play() // áudio executado quando cronômetro for pausado
        zerar()
        return
        
    }else{
        comecar.play() // áudio executado quando cronômetro iniciar
        intervaloid = setInterval(contagemRegressiva,1000)//SetInterval=executar código repetidamente em um intervalo de tempo definido
        iniciarOuPausarBt.textContent = "Pausar"//text contente é para inserir textos.
        iniciarOuPauseBticone.setAttribute('src',`imagens/pause.png`);
    }
        

}
function zerar(){
    clearInterval(intervaloid) //clearInterval()=impede a execução do código que está dentro dela.
    iniciarOuPausarBt.textContent = "Começar"
    iniciarOuPauseBticone.setAttribute('src',`imagens/play_arrow.png`);
    intervaloid = null
}

function mostrarTempo(){//formatando minuto/segundo 
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado  = tempo.toLocaleTimeString('pt-Br',{minute:'2-digit', second:'2-digit'})
    tempoNaTela.innerHTML =`${tempoFormatado}` 
}
mostrarTempo()//Inserir temporizador na tela







