const url = "http://localhost:3001/productos";

const formulario = document.getElementById("formulario");
const listaProductos = document.getElementById("listaProductos");

const nombreInput = document.getElementById("nombre");
const precioInput = document.getElementById("precio");
const productoId = document.getElementById("productoId");


// MOSTRAR PRODUCTOS
async function obtenerProductos() {

    const respuesta = await fetch(url);

    const productos = await respuesta.json();

    listaProductos.innerHTML = "";

    productos.forEach(producto => {

        const div = document.createElement("div");

        div.classList.add("producto");

        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>

            <div class="botones">
                <button class="editar">
                    Editar
                </button>

                <button class="eliminar">
                    Eliminar
                </button>
            </div>
        `;

        // BOTON EDITAR
        const btnEditar = div.querySelector(".editar");

        btnEditar.addEventListener("click", () => {

            productoId.value = producto.id;

            nombreInput.value = producto.nombre;

            precioInput.value = producto.precio;
        });

        // BOTON ELIMINAR
        const btnEliminar = div.querySelector(".eliminar");

        btnEliminar.addEventListener("click", async () => {

            await fetch(`${url}/${producto.id}`, {
                method: "DELETE"
            });

            obtenerProductos();
        });

        listaProductos.appendChild(div);
    });

    localStorage.setItem("productos", JSON.stringify(productos));
}


// AGREGAR O EDITAR
formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const producto = {
        nombre: nombreInput.value,
        precio: precioInput.value
    };

    // EDITAR
    if (productoId.value) {

        await fetch(`${url}/${productoId.value}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(producto)
        });

    } else {

        // CREAR
        await fetch(url, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(producto)
        });
    }

    formulario.reset();

    productoId.value = "";

    obtenerProductos();
});


// INICIAR
obtenerProductos();