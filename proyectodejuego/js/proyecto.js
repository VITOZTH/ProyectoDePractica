const selecionarAtaqueHtml = document.getElementById('seleccionar_ataque')
const selecionarReinicioHtml = document.getElementById('Reinicio')
const botonMascotaJugador =  document.getElementById('boton_mascota')
const botonReinicio = document.getElementById('boton_reiniciar')

const selecionarMascotaHtml = document.getElementById('seleccionar_mascota')
const spamMascotaJ = document.getElementById('M_jugador')

const spamEnemigo = document.getElementById('M_enemigo')

const seccionMensaje = document.getElementById('resultado')
const seccionMensajeJugador = document.getElementById('ataque-del-jugador')
const seccionMensajeEnemigo = document.getElementById('ataque-del-enemigo')

const vidasHTMLJugador = document.getElementById('vidaDeJugador')
const vidasHTMLEnemigo = document.getElementById('vidaDeEnemigo')

const ContenedorDeTarjetas = document.getElementById('ContenedorTarjetas')
const ContenedorAtaques = document.getElementById('ContenedorAtaque')
const AtaqueJugador1 = document.getElementById('ContenedorJugadorEnemeigo')


let ataqueMokeponEnemigo 
let mokepones = []
let AtaqueEnemigo = []
let opcionesDeMokepones
let opcionesDeAtaques
let mostarJugadoreEnemigo
let vidasEnemigo = 3
let vidasJugador = 3
let victoriasJugador = 0
let victoriasEnemigo = 0
let impunthipodoge 
let impuntcapipepo 
let impuntratigueya 
let MascotaJugador
let botonfuego 
let botonAgua
let botonTierra
let AtaqueJugador = [] 
let Botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo 
let FotoJugador
class Mokepon {

    constructor (nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipogge = new Mokepon ('Hipogge', './assests/Agua.png', 5)

let capipepo = new Mokepon('Capipepo', './assests/Fuego.png', 5)

let ratigueya = new Mokepon('Ratigueya', './assests/Tierra.png', 5)

hipogge.ataques.push(
      {nombre: 'Agua 💧', id: 'boton_agua'},
      {nombre: 'Fuego 🔥', id: 'boton_fuego'},
      {nombre: 'Tierra 🌱', id: 'boton_tierra'}
)

capipepo.ataques.push(
    {nombre: 'Fuego 🔥', id: 'boton_fuego'},
    {nombre: 'Agua 💧', id: 'boton_agua'},
    {nombre: 'Tierra 🌱', id: 'boton_tierra'}
)

ratigueya.ataques.push(
    {nombre: 'Tierra 🌱', id: 'boton_tierra'},
    {nombre: 'Fuego 🔥', id: 'boton_fuego'},
    {nombre: 'Agua 💧', id: 'boton_agua'}
)

mokepones.push(hipogge, capipepo, ratigueya)

function inciarJuego(){

    selecionarAtaqueHtml.style.display = 'none'

    mokepones.forEach((Mokepon) => {
        opcionesDeMokepones = `
            <input type="radio" name="mascota" id=${Mokepon.nombre} /> 
            <label class="tarjeta-de-mokepon" for=${Mokepon.nombre}>
                <p>${Mokepon.nombre}</p> 
                <img src="${Mokepon.foto}" alt=${Mokepon.nombre}> 
            </label>
        `
        ContenedorDeTarjetas.innerHTML += opcionesDeMokepones

        impunthipodoge = document.getElementById('Hipogge')
        impuntcapipepo = document.getElementById('Capipepo')
        impuntratigueya = document.getElementById('Ratigueya') 
    })


    selecionarReinicioHtml.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReinicio.addEventListener('click', reinicioJuego)
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaJugador(){

    selecionarAtaqueHtml.style.display = 'flex'

    selecionarMascotaHtml.style.display = 'none'

    if(impunthipodoge.checked){
        spamMascotaJ.innerHTML = impunthipodoge.id
        MascotaJugador = impunthipodoge.id
        FotoJugador = hipogge.foto
    }else if(impuntcapipepo.checked){
        spamMascotaJ.innerHTML = impuntcapipepo.id
        MascotaJugador = impuntcapipepo.id
        FotoJugador = capipepo.foto
    }else if(impuntratigueya.checked){
        spamMascotaJ.innerHTML = impuntratigueya.id
        MascotaJugador = impuntratigueya.id
        FotoJugador = ratigueya.foto
    }else{
        alert("Debes selecionar una Mascota")
    }

    extraerataques(MascotaJugador)

    selecionarMacotaEnemigo()
}
 function extraerataques (MascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (MascotaJugador === mokepones[i].nombre ) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarataques (ataques)
 }

function mostrarataques(ataques){
    ataques.forEach((ataque) => {
        opcionesDeAtaques = `
            <button class="tarjeta-de-ataque BATaque" id="${ataque.id}">${ataque.nombre}</button>
        `
        ContenedorAtaques.innerHTML += opcionesDeAtaques
    })

    

    botonfuego = document.getElementById('boton_fuego')
    botonAgua = document.getElementById('boton_agua')
    botonTierra = document.getElementById('boton_tierra') 
    botones = document.querySelectorAll('.BATaque')

}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) =>{
            if (e.target.textContent === 'Fuego 🔥' ) {
                AtaqueJugador.push('Fuego')
                console.log(AtaqueJugador)
                boton.style.background = '#9F73AB'
                botonfuego.disabled = true
            }else if(e.target.textContent === 'Agua 💧'){
                AtaqueJugador.push('Agua')
                console.log(AtaqueJugador)
                boton.style.background = '#9F73AB'
                botonAgua.disabled = true
            }else{
                AtaqueJugador.push('Tierra')
                console.log(AtaqueJugador)
                boton.style.background = '#9F73AB' 
                botonTierra.disabled = true
            }
            AtaqueEnemigoF()
        })
    })
    
}

function selecionarMacotaEnemigo(){
   let mascotAlateoria = aleatorio(0, mokepones.length -1)
   
    spamEnemigo.innerHTML =  mokepones[mascotAlateoria].nombre
    ataqueMokeponEnemigo  = mokepones[mascotAlateoria].ataques
    secuenciaAtaque()
}


function crearmensaje(resultado){
    
    let nuevoAaqueDelJugador = document.createElement('p')
    let nuevoAaqueDelEnemigo = document.createElement('p')   

    
    seccionMensaje.innerHTML = resultado
    nuevoAaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    seccionMensajeJugador.appendChild(nuevoAaqueDelJugador)
    seccionMensajeEnemigo.appendChild(nuevoAaqueDelEnemigo)
}

function crearmensajeFinal(resultadoFinal){
    seccionMensaje.innerHTML = resultadoFinal
    
    selecionarReinicioHtml.style.display = 'block'
}

function AtaqueEnemigoF(){
   let ataquealatorio = aleatorio(0, ataqueMokeponEnemigo.length -1)

   if (ataquealatorio == 0 || ataquealatorio == 1){
        AtaqueEnemigo.push ('Fuego')
   }else if(ataquealatorio == 3 || ataquealatorio == 4){
        AtaqueEnemigo.push ('Agua')
   }else {
        AtaqueEnemigo.push ('Tierra')
   }
   console.log(AtaqueEnemigo)
  iniciarPelea()

}

function iniciarPelea(){

    if (AtaqueJugador.length === 3) {
        combate()
    }

}

function indexAmbosOponente(jugadores, enemigos){
    indexAtaqueJugador = AtaqueJugador[jugadores]
    indexAtaqueEnemigo = AtaqueEnemigo[enemigos]
}

function combate(){
    
    for (let index = 0; index < AtaqueJugador.length; index++) {
        if (AtaqueJugador[index] == AtaqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearmensaje("Empate")
        }else if((AtaqueJugador[index] == 'Agua' && AtaqueEnemigo[index] == 'Fuego') || (AtaqueJugador[index] == 'Fuego' && AtaqueEnemigo[index] == 'Tierra') || (AtaqueJugador[index] == 'Tierra' && AtaqueEnemigo[index] == 'Agua')) {
            indexAmbosOponente(index, index)
            crearmensaje("Ganaste 🥇")
            victoriasJugador++
            vidasHTMLJugador.innerHTML = victoriasJugador
        }else{
            indexAmbosOponente(index, index)
            crearmensaje("Perdiste")   
            victoriasEnemigo++     
            vidasHTMLEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarvidas()
}


function revisarvidas(){

    if (victoriasJugador > victoriasEnemigo){
        crearmensajeFinal ("Felizitaciones Ganaste")
    }else if(victoriasEnemigo > victoriasJugador){
        crearmensajeFinal ("Lo siento, Perdiste")
    }else{
        crearmensajeFinal ("Empataste")
    }
    
}

function reinicioJuego(){
    location.reload()
}

window.addEventListener('load', inciarJuego)