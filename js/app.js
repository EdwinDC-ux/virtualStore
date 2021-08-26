const nuevoBoton = document.createElement('button')
document.querySelector('#btnCont').append(nuevoBoton)
nuevoBoton.innerText = 'Nuevo Boton'

nuevoBoton.classList.add('mt-5')
nuevoBoton.classList.add('btn')
nuevoBoton.classList.add('btn-primary')

nuevoBoton.addEventListener('click', (evento) => {
    let variable
    evento.stopPropagation()
    do {
        variable = prompt("Ingresa tu nombre")
    } while (variable === "")
    variable != null ? alert(`Hola ${variable} Bienvenido a mi tienda`) : null
})

const blusaNaranja = document.querySelector('#naranja')
const blusaRojo = document.querySelector('#roja')
const blusaMorado = document.querySelector('#morado')
let imagenVestido = document.querySelector('#imgBlouse')

blusaRojo.addEventListener('click', (evento) => {
    evento.stopPropagation()
    imagenVestido.src = "images/fashion3.jpg"
})