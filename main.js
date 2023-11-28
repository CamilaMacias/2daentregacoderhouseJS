const zapatilla = [

  {nombre: "Adidas Superstar", precio: 100, stock: 35},
  {nombre: "Adidas Retropy", precio: 145, stock: 22},
  {nombre: "Adidas Samba", precio: 180, stock: 15}
]

alert('Bienvenido a Adidas! ¿Qué te gustaría ver?')

// POSIBLES RESPUESTAS
const userInput = prompt("¿Qué buscás? ¿Zapatillas, remeras o shorts?");
let userInputLower;

if (userInput !== null) {
  userInputLower = userInput.toLowerCase();
}

if (userInputLower === 'zapatillas') {
  const modeloBuscado = prompt('Ingresá el modelo de zapatilla que querés agregar al carrito');
  const zapatillaEncontrada = buscarZapatillaPorModelo(modeloBuscado);

  if (zapatillaEncontrada) {
    agregarAlCarrito(zapatillaEncontrada);
  } else {
    console.log('Zapatilla no encontrada');
  }
} else if (userInputLower === 'remeras' || userInputLower === 'shorts') {
  console.log('Esta página web está dedicada solamente a zapatillas.');
} else {
  console.log('Opción no válida.');
}

//buscar zapatilla por modelo
function buscarZapatillaPorModelo(modelo) {
  return zapatilla.find((z) => z.nombre.toLowerCase() === modelo.toLowerCase());
}

  const carrito = []


  
  
  function mostrarCatalogo() {
    console.log("Catálogo de zapatillas:");
    zapatilla.forEach((zapatilla, i) => {
      console.log(`${i + 1}. ${zapatilla.nombre} - Precio: $${zapatilla.precio} - Stock: ${zapatilla.stock}`);
    });
  }

  function buscarZapatillaPorModelo(modelo) {
    return zapatilla.find((z) => z.nombre.toLowerCase() === modelo.toLowerCase());
  }
  
  
  carrito = obtenerCarritoDesdeLocalStorage();

function obtenerCarritoDesdeLocalStorage() {
  return JSON.parse(localStorage.getItem('carrito')) || [];
}

function guardarCarritoEnLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

  

  function agregarAlCarrito(zapatillaSeleccionada, cantidad) {
    if (zapatillaSeleccionada && cantidad > 0 && cantidad <= zapatillaSeleccionada.stock) {
      const itemEnCarrito = carrito.find((item) => item.zapatilla.nombre === zapatillaSeleccionada.nombre);
  
      if (itemEnCarrito) {
        itemEnCarrito.cantidad += cantidad;
      } else {
        carrito.push({ zapatilla: zapatillaSeleccionada, cantidad });
      }
  
      zapatillaSeleccionada.stock -= cantidad;
      console.log(`Zapatilla(s) agregada(s) al carrito: ${cantidad} ${zapatillaSeleccionada.nombre}(s)`);
    } else {
      console.log("Error al cargar el carrito!");
    }
  }
  
  


  document.addEventListener('DOMContentLoaded', function () {
  
    //botón "Carrito"
    let carritoBtn = document.getElementById('carritoBtn');
  
    // Agrega un evento de clic al botón "Carrito"
    carritoBtn.addEventListener('click', function () {
      mostrarMensajeCarrito();
    });
  
    // Función para cuando se clickea el botón "Carrito"
    function mostrarMensajeCarrito() {
      alert('¡Agregar producto!');
    }
  });
  
  


  function mostrarCarrito() {
    console.log("Carrito");
    carrito.forEach((item, i) => {
      console.log(`${i + 1}. ${item.nombre} - Cantidad: ${item.cantidad}`);
    });
  }
  
  function calcularTotal() {
    let total = 0;
    carrito.forEach((item) => {
      total += item.precio * item.cantidad;
    });
    return total;
  }
  

  
  mostrarCatalogo();

  agregarAlCarrito(0, 2);
  agregarAlCarrito(1, 1);

  mostrarCarrito();

  const totalCompra = calcularTotal();
  console.log(`Total de la compra: $${totalCompra}`);