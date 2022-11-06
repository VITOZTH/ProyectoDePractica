function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra 🪨" 
    }else if (jugada == 2){
        resultado = "Papel 📃"
    }else if (jugada == 3){
        resultado = "Tijera ✂️"
    }else{
        resultado = "Ninguno"
    }
    return resultado
}
function aleatoria(maximo, minimo){
    return Math.floor (Math.random() * (maximo - minimo + 1) + minimo)
}

//1 es piedra, 2 es papel, 3 es roca
let jugador = 0
let pc = 0  
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3){
    pc = aleatoria (3, 1)                
    jugador = prompt("Elige: 1 es para piedra, 2 para papel y 3 para tijera")
    //alert ("Elegiste: " + jugador)

    alert ("PC elige " + eleccion(pc))
    alert ("Tu elegiste " + eleccion(jugador))
    //Combate

    if (pc == jugador){
        alert ("Empate")
    }else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        alert ("Ganaste")
        triunfos ++
    }else{
        alert("Perdiste")
        perdidas ++
    }                   
}

alert ("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")