
let productos = [];

function agregarProducto() {
  const nombre = prompt("Ingrese el nombre del producto:");
  const cantidad = parseInt(prompt("Ingrese la cantidad de " + nombre + ":"));
  const precio = parseFloat(prompt("Ingrese el precio por unidad de " + nombre + ":"));

  const producto = {
    nombre: nombre,
    cantidad: cantidad,
    precio: precio
  };

  productos.push(producto);
  actualizarTabla();
}

function calcularTotal() {
  let total = 0;
  productos.forEach(producto => {
    total += producto.cantidad * producto.precio;
  });

  const totalHTML = document.getElementById("total");
  totalHTML.innerHTML = `<h2>Total a pagar: $${total}</h2>`;
}

function actualizarTabla() {
  const tablaHTML = `
    <table>
      <tr>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Precio por Unidad</th>
        <th>Precio Total</th>
      </tr>
      ${productos.map(producto => `
        <tr>
          <td>${producto.nombre}</td>
          <td>${producto.cantidad}</td>
          <td>$${producto.precio.toFixed(2)}</td>
          <td>$${(producto.cantidad * producto.precio).toFixed(2)}</td>
        </tr>`)}
    </table>
  `;

  const productosHTML = document.getElementById("productos");
  productosHTML.innerHTML = tablaHTML;
}




