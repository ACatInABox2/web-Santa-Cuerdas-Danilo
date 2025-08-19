//firma digital
const firma_digital = {
    nombre: "Santiago Torres",
    email: "santiagomh912@gmail.com",
    telefono: "+57 3216166273",
    cargo: "Desarrollador Web"
}
console.log(firma_digital);
// Cargar un componente en un div específico
async function loadComponent(id, file) {
  const res = await fetch(`frontend/src/components/${file}`);
  document.getElementById(id).innerHTML = await res.text();
}

// Inyectar header y footer
loadComponent("header", "header.html");
loadComponent("footer", "footer.html");
loadComponent("navbar", "navbar.html");