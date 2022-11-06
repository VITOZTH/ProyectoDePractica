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

let mokepones = []
let AtaqueJugador 
let AtaqueEnemigo 
let opcionesDeMokepones
let opcionesDeAtaques
let vidasEnemigo = 3
let vidasJugador = 3
let impunthipodoge 
let impuntcapipepo 
let impuntratigueya 
let MascotaJugador
let botonfuego 
let botonAgua
let botonTierra 
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
      {nombre: 'Agua 💧', id: 'boton_agua'},
      {nombre: 'Agua 💧', id: 'boton_agua'},
      {nombre: 'Fuego 🔥', id: 'boton_fuego'},
      {nombre: 'Tierra 🌱', id: 'boton_tierra'}
)

capipepo.ataques.push(
    {nombre: 'Fuego 🔥', id: 'boton_fuego'},
    {nombre: 'Fuego 🔥', id: 'boton_fuego'},
    {nombre: 'Fuego 🔥', id: 'boton_fuego'},
    {nombre: 'Agua 💧', id: 'boton_agua'},
    {nombre: 'Tierra 🌱', id: 'boton_tierra'}
)

ratigueya.ataques.push(
    {nombre: 'Tierra 🌱', id: 'boton_tierra'},
    {nombre: 'Tierra 🌱', id: 'boton_tierra'},
    {nombre: 'Tierra 🌱', id: 'boton_tierra'},
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
    }else if(impuntcapipepo.checked){
        spamMascotaJ.innerHTML = impuntcapipepo.id
        MascotaJugador = impuntcapipepo.id
    }else if(impuntratigueya.checked){
        spamMascotaJ.innerHTML = impuntratigueya.id
        MascotaJugador = impuntratigueya.id
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
            <button class="tarjeta-de-ataque" id="${ataque.id}">${ataque.nombre}</button>
        `
        ContenedorAtaques.innerHTML += opcionesDeAtaques
    })

    botonfuego = document.getElementById('boton_fuego')
    botonAgua = document.getElementById('boton_agua')
    botonTierra = document.getElementById('boton_tierra') 

    botonfuego.addEventListener('click', ataqueFuego)

    botonAgua.addEventListener('click', ataqueAgua)

    botonTierra.addEventListener('click', ataqueTierra)
}

function selecionarMacotaEnemigo(){
   let mascotAlateoria = aleatorio(0, mokepones.length -1)
   
    spamEnemigo.innerHTML =  mokepones[mascotAlateoria].nombre

}

function ataqueFuego(){
    AtaqueJugador = 'Fuego'
    AtaqueEnemigoF()
}

function ataqueAgua(){
    AtaqueJugador = 'Agua'
    AtaqueEnemigoF()
}

function ataqueTierra(){
    AtaqueJugador = 'Tierra'
    AtaqueEnemigoF()

}

function crearmensaje(resultado){
    
    let nuevoAaqueDelJugador = document.createElement('p')
    let nuevoAaqueDelEnemigo = document.createElement('p')   

    seccionMensaje.innerHTML = resultado
    nuevoAaqueDelJugador.innerHTML = AtaqueJugador
    nuevoAaqueDelEnemigo.innerHTML = AtaqueEnemigo

    seccionMensajeJugador.appendChild(nuevoAaqueDelJugador)
    seccionMensajeEnemigo.appendChild(nuevoAaqueDelEnemigo)
}

function crearmensajeFinal(resultadoFinal){
    seccionMensaje.innerHTML = resultadoFinal

    botonfuego.disabled = true

    botonAgua.disabled = true

    botonTierra.disabled = true
    
    selecionarReinicioHtml.style.display = 'block'
}

function AtaqueEnemigoF(){
   let ataquealatorio = aleatorio(1, 3)

   if (ataquealatorio == 1){
        AtaqueEnemigo = 'Fuego'
   }else if(ataquealatorio == 2){
        AtaqueEnemigo = 'Agua'
   }else {
        AtaqueEnemigo = 'Tierra'
   }
   combate()

}

function combate(){
    
    if (AtaqueJugador == AtaqueEnemigo){
        crearmensaje("Empate")
    }else if((AtaqueJugador == 'Agua' && AtaqueEnemigo == 'Fuego') || (AtaqueJugador == 'Fuego' && AtaqueEnemigo == 'Tierra') || (AtaqueJugador == 'Tierra' && AtaqueEnemigo == 'Agua')) {
        crearmensaje("Ganaste 🥇")
        vidasEnemigo --
        vidasHTMLEnemigo.innerHTML = vidasEnemigo
    }else{
        crearmensaje("Perdiste") 
        vidasJugador --
        vidasHTMLJugador.innerHTML = vidasJugador
    }  
    
    revisarvidas()
}


function revisarvidas(){

    if (vidasEnemigo == 0){
        crearmensajeFinal ("Felizitaciones Ganaste")
    }else if(vidasJugador == 0){
        crearmensajeFinal ("Lo siento, Perdiste")
    }
    
}

function reinicioJuego(){
    location.reload()
}

window.addEventListener('load', inciarJuego)