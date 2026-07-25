const residuos = [
  { nombre: "botella de plástico", categoria: "Plástico", contenedor: "Amarillo", icono: "🧴" },
  { nombre: "bolsa plástica", categoria: "Plástico", contenedor: "Amarillo", icono: "🛍️" },
  { nombre: "envase de shampoo", categoria: "Plástico", contenedor: "Amarillo", icono: "🧴" },
  { nombre: "tapadera plástica", categoria: "Plástico", contenedor: "Amarillo", icono: "🧢" },

  { nombre: "caja de cartón", categoria: "Papel", contenedor: "Azul", icono: "📦" },
  { nombre: "periódico", categoria: "Papel", contenedor: "Azul", icono: "📰" },
  { nombre: "hoja de papel", categoria: "Papel", contenedor: "Azul", icono: "📄" },
  { nombre: "revista", categoria: "Papel", contenedor: "Azul", icono: "📘" },

  { nombre: "botella de vidrio", categoria: "Vidrio", contenedor: "Verde", icono: "🍾" },
  { nombre: "frasco de vidrio", categoria: "Vidrio", contenedor: "Verde", icono: "🫙" },
  { nombre: "vaso de vidrio", categoria: "Vidrio", contenedor: "Verde", icono: "🥛" },

  { nombre: "lata de aluminio", categoria: "Metal", contenedor: "Amarillo", icono: "🥫" },
  { nombre: "lata de comida", categoria: "Metal", contenedor: "Amarillo", icono: "🥫" },
  { nombre: "cable", categoria: "Metal", contenedor: "Amarillo", icono: "🔌" },

  { nombre: "cáscara de banano", categoria: "Orgánico", contenedor: "Café", icono: "🍌" },
  { nombre: "restos de comida", categoria: "Orgánico", contenedor: "Café", icono: "🍽️" },
  { nombre: "cáscara de huevo", categoria: "Orgánico", contenedor: "Café", icono: "🥚" },
  { nombre: "manzana", categoria: "Orgánico", contenedor: "Café", icono: "🍎" },

  { nombre: "celular", categoria: "Electrónico", contenedor: "Rojo", icono: "📱" },
  { nombre: "computadora", categoria: "Electrónico", contenedor: "Rojo", icono: "💻" },
  { nombre: "cargador", categoria: "Electrónico", contenedor: "Rojo", icono: "🔌" },
  { nombre: "mouse", categoria: "Electrónico", contenedor: "Rojo", icono: "🖱️" },
  { nombre: "botella PET", categoria: "Plástico", contenedor: "Amarillo", icono: "🧴" },
  { nombre: "vaso plástico", categoria: "Plástico", contenedor: "Amarillo", icono: "🥤" },
  { nombre: "tapa plástica", categoria: "Plástico", contenedor: "Amarillo", icono: "🧢" },
  { nombre: "envase de yogur", categoria: "Plástico", contenedor: "Amarillo", icono: "🥣" },
  { nombre: "cepillo de dientes", categoria: "Plástico", contenedor: "Amarillo", icono: "🪥" },

  { nombre: "caja de cereal", categoria: "Papel", contenedor: "Azul", icono: "📦" },
  { nombre: "cuaderno", categoria: "Papel", contenedor: "Azul", icono: "📓" },
  { nombre: "sobre de papel", categoria: "Papel", contenedor: "Azul", icono: "✉️" },
  { nombre: "cartulina", categoria: "Papel", contenedor: "Azul", icono: "📄" },
  { nombre: "libro viejo", categoria: "Papel", contenedor: "Azul", icono: "📚" },

  { nombre: "tarro de vidrio", categoria: "Vidrio", contenedor: "Verde", icono: "🫙" },
  { nombre: "botella de perfume", categoria: "Vidrio", contenedor: "Verde", icono: "🌸" },
  { nombre: "copas de vidrio", categoria: "Vidrio", contenedor: "Verde", icono: "🍷" },
  { nombre: "lámpara de vidrio", categoria: "Vidrio", contenedor: "Verde", icono: "💡" },

  { nombre: "lata de refresco", categoria: "Metal", contenedor: "Amarillo", icono: "🥫" },
  { nombre: "tornillo", categoria: "Metal", contenedor: "Amarillo", icono: "🔩" },
  { nombre: "clavo", categoria: "Metal", contenedor: "Amarillo", icono: "📌" },
  { nombre: "tapa metálica", categoria: "Metal", contenedor: "Amarillo", icono: "🧲" },

  { nombre: "cáscara de naranja", categoria: "Orgánico", contenedor: "Café", icono: "🍊" },
  { nombre: "cáscara de papa", categoria: "Orgánico", contenedor: "Café", icono: "🥔" },
  { nombre: "posos de café", categoria: "Orgánico", contenedor: "Café", icono: "☕" },
  { nombre: "hojas secas", categoria: "Orgánico", contenedor: "Café", icono: "🍂" },

  { nombre: "teclado", categoria: "Electrónico", contenedor: "Rojo", icono: "⌨️" },
  { nombre: "monitor", categoria: "Electrónico", contenedor: "Rojo", icono: "🖥️" },
  { nombre: "audífonos", categoria: "Electrónico", contenedor: "Rojo", icono: "🎧" },
  { nombre: "televisor", categoria: "Electrónico", contenedor: "Rojo", icono: "📺" },

  { nombre: "pila AA", categoria: "Electrónico", contenedor: "Rojo", icono: "🔋" },
  { nombre: "pila AAA", categoria: "Electrónico", contenedor: "Rojo", icono: "🔋" },
  { nombre: "batería recargable", categoria: "Electrónico", contenedor: "Rojo", icono: "🔋" },

  { nombre: "servilleta usada", categoria: "No reciclable", contenedor: "Gris", icono: "🧻" },
  { nombre: "pañal desechable", categoria: "No reciclable", contenedor: "Gris", icono: "🧷" },
  { nombre: "colilla de cigarro", categoria: "No reciclable", contenedor: "Gris", icono: "🚬" },
  { nombre: "papel higiénico usado", categoria: "No reciclable", contenedor: "Gris", icono: "🧻" }
];

let categoriaActual = "Todos";

const tips = [
  "Lava los envases antes de reciclarlos para evitar malos olores y contaminación.",
  "Doblar el cartón ayuda a ahorrar espacio en el contenedor.",
  "Las pilas nunca deben tirarse en la basura común.",
  "Si un objeto está muy sucio, primero límpialo antes de reciclarlo.",
  "Separar residuos en casa facilita mucho el reciclaje."
];

function buscarResiduo() {
  const texto = document.getElementById("objeto").value.toLowerCase().trim();
  const resultado = document.getElementById("resultado");

  if (!texto) {
    resultado.innerHTML = "<div class='tarjeta'>Escribe un objeto para clasificarlo.</div>";
    mostrarLista();
    return;
  }

  const encontrado = residuos.find(r => r.nombre.includes(texto));

  if (encontrado) {
    resultado.innerHTML = `
      <div class="tarjeta">
        <div style="font-size: 36px;">${encontrado.icono}</div>
        <strong>Objeto:</strong> ${encontrado.nombre}<br>
        <strong>Categoría:</strong> ${encontrado.categoria}<br>
        <strong>Contenedor:</strong> ${encontrado.contenedor}
      </div>
    `;
  } else {
    resultado.innerHTML = "<div class='tarjeta'>Objeto no encontrado. Intenta con otro nombre.</div>";
  }

  mostrarLista(texto);
}

function limpiarBusqueda() {
  document.getElementById("objeto").value = "";
  categoriaActual = "Todos";
  document.getElementById("resultado").innerHTML = "<div class='tarjeta'>Escribe un objeto para clasificarlo.</div>";
  mostrarLista();
}

function filtrarCategoria(categoria) {
  categoriaActual = categoria;
  mostrarLista(document.getElementById("objeto").value.toLowerCase().trim());
}

function mostrarLista(texto = "") {
  const lista = document.getElementById("lista");

  let filtrados = residuos;

  if (categoriaActual !== "Todos") {
    filtrados = filtrados.filter(r => r.categoria === categoriaActual);
  }

  if (texto) {
    filtrados = filtrados.filter(r => r.nombre.includes(texto));
  }

  lista.innerHTML = filtrados.map(r => `
    <div class="item">
      <div class="icono">${r.icono}</div>
      <strong>${r.nombre}</strong><br>
      Categoría: ${r.categoria}<br>
      Contenedor: ${r.contenedor}
    </div>
  `).join("");

  document.getElementById("totalResiduos").textContent = residuos.length;
}

function mostrarTip() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip").textContent = tip;
}

mostrarLista();
mostrarTip();
document.getElementById("resultado").innerHTML = "<div class='tarjeta'>Escribe un objeto para clasificarlo.</div>";