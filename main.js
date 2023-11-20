
alert('Bienvenido a Adidas! ¿Qué te gustaría ver?')

// POSIBLES RESPUESTAS
const userInput = prompt("¿Qué buscás? ¿Zapatillas, remeras o shorts?");
let userInputLower;

if (userInput !== null) {
  userInputLower = userInput.toLowerCase();
}

if (userInputLower === 'zapatillas') {
  const productoid = parseInt(prompt('Ingresá la zapatilla que querés agregar al carrito'));
  agregarAlCarrito(productoid);
} else if (userInputLower === 'remeras' || userInputLower === 'shorts') {
  console.log('Esta página web está dedicada solamente a zapatillas.');
} else {
  console.log('Opción no válida.');
}

  const carrito = []

const zapatilla = [

  {nombre: "Adidas Superstar", precio: 100, stock: 35},
  {nombre: "Adidas Retropy", precio: 145, stock: 22},
  {nombre: "Adidas Samba", precio: 180, stock: 15}
  
  
  ]
  function mostrarCatalogo() {
    console.log("Catálogo de zapatillas:");
    zapatilla.forEach((zapatilla, i) => {
      console.log(`${i + 1}. ${zapatilla.nombre} - Precio: $${zapatilla.precio} - Stock: ${zapatilla.stock}`);
    });
  }

  function agregarAlCarrito(zapatillaIndex, cantidad) {
    const zapatillaSeleccionada = zapatilla[zapatillaIndex];
  
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