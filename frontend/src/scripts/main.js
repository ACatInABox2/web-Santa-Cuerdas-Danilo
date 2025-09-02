//firma digital
const firma_digital = {
    nombre: "Santiago Torres",
    email: "santiagomh912@gmail.com",
    telefono: "+57 3216166273",
    cargo: "Desarrollador Web"
}
console.log(firma_digital);
// Cargar un componente en un div específico
// Cargar un componente en un div específico
async function loadComponent(id, file) {
  try {
    // 👇 OJO: el path correcto desde index.html
    const res = await fetch(`./frontend/src/components/${file}`);
    if (!res.ok) throw new Error(`No se pudo cargar ${file}`);
    document.getElementById(id).innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

// Inyectar componentes
loadComponent("header", "header.html");
loadComponent("navbar", "navbar.html");
loadComponent("footer", "footer.html");



// Efecto navbar shrink al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

// Cargar navbar de forma modular
document.addEventListener("DOMContentLoaded", () => {
  fetch("components/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    });
});
