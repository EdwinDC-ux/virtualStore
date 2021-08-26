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
const blusaRoja = document.querySelector('#roja')
const blusaMorada = document.querySelector('#morada')
let imagenBlusa = document.querySelector('#imgBlouse')

blusaRoja.addEventListener('click', (evento) => {
    evento.stopPropagation()
    imagenBlusa.src = "images/fashion3.jpg"
})

blusaNaranja.addEventListener('click', (evento) => {
    evento.stopPropagation()
    imagenBlusa.src = "images/fashion1.jpg"
})

blusaMorada.addEventListener('click', (evento) => {
    evento.stopPropagation()
    imagenBlusa.src = "images/fashion2.jpg"
})