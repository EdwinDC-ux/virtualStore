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

let cantidadRopa = 0
let precio = 200
let suma = 0
const removerRopa = document.querySelector('#removerRopa')
const agregarRopa = document.querySelector('#agregarRopa')
let mensajeRopa = ''
let divMensaje = document.createElement('div')
let contenidoTienda = document.querySelector('#contenidoTienda')


agregarRopa.addEventListener('click', (evento) => {
    cantidadRopa++
    suma += precio
    document.querySelector('#contadorRopa').innerHTML = `<h2>${cantidadRopa}</h2>`
    mensajeRopa = `Has agregado un elemento al carrito, el total es de: $${suma} <a id="cerrar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></a>`
    divMensaje.innerHTML = mensajeRopa
    divMensaje.classList.add('alert', 'alert-success', 'divMensaje')
    divMensaje.classList.remove('alert-warning')
    contenidoTienda.append(divMensaje)
    const cerrar = document.querySelector('#cerrar')
    cerrar.addEventListener('click', (evento) => {
        divMensaje.remove()
    })
})

removerRopa.addEventListener('click', (evento) => {
    if (cantidadRopa > 0) {
        cantidadRopa--
        suma -= precio
        document.querySelector('#contadorRopa').innerHTML = `<h2>${cantidadRopa}</h2>`
        mensajeRopa = `Has quitado un elemento del carrito, el total es de: $${suma} <a id="cerrar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></a>`
        divMensaje.innerHTML = mensajeRopa
        divMensaje.classList.add('alert', 'alert-warning', 'divMensaje')
        divMensaje.classList.remove('alert-success')
        contenidoTienda.append(divMensaje)
        const cerrar = document.querySelector('#cerrar')
        cerrar.addEventListener('click', (evento) => {
            divMensaje.remove()
        })
    }
})