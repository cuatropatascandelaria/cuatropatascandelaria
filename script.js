async function cargarContador() {
  try {
    let res = await fetch("contador.json");
    let data = await res.json();
    document.getElementById("contador").innerText = data.valor;
  } catch (err) {
    console.error("Error cargando contador", err);
  }
}
async function guardarContador(valor) {
  document.getElementById("contador").innerText = valor;
  localStorage.setItem("contador", valor);
}
function editarContador() {
  let clave = prompt("Introduce la contraseña:");
  if (clave === "Cerati") {
    let nuevoValor = prompt("Nuevo valor del contador:");
    if (nuevoValor) { guardarContador(nuevoValor); }
  } else { alert("Contraseña incorrecta"); }
}
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("contador")) {
    document.getElementById("contador").innerText = localStorage.getItem("contador");
  } else { cargarContador(); }
  let form = document.getElementById("registroForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let actual = parseInt(localStorage.getItem("contador") || "0") + 1;
      guardarContador(actual);
      document.getElementById("mensaje").innerText = "✅ Registro exitoso";
      form.reset();
    });
  }
});
