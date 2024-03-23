const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

window.addEventListener('scroll', function() {
    if (window.innerWidth < 480 && window.scrollY >= 100) {
      document.querySelectorAll('.custom-card').forEach(function(card) {
        card.classList.add('hover-effect');
      });
    } else {
      document.querySelectorAll('.custom-card').forEach(function(card) {
        card.classList.remove('hover-effect');
      });
    }
  });

  
// Seleccionar todos los modales
const modales = document.querySelectorAll("#modal");

// Función para centrar un modal específico en la pantalla
function centrarModal(modal) {
  const ventanaAncho = window.innerWidth;
  const ventanaAlto = window.innerHeight;
  const modalAncho = modal.offsetWidth;
  const modalAlto = modal.offsetHeight;

  const leftPos = (ventanaAncho - modalAncho) / 2;
  const topPos = (ventanaAlto - modalAlto) / 2;

  modal.style.left = leftPos + "px";
  modal.style.top = topPos + "px";
}

// Centrar todos los modales al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener("DOMContentLoaded", () => {
  modales.forEach(modal => centrarModal(modal));
});
window.addEventListener("resize", () => {
  modales.forEach(modal => centrarModal(modal));
});

// Resto de tu código para abrir y cerrar el modal
const btnAbrirModal = document.querySelectorAll("#btn-abrir-modal");
const btnCerrarModal = document.querySelectorAll("#btn-cerrar-modal");

// Cerrar el modal al hacer clic fuera de él
window.addEventListener("click", (event) => {
  modales.forEach(modal => {
    if (event.target === modal) {
      modal.close();
    }
  });
});

// Agregar event listeners para abrir y cerrar cada modal
btnAbrirModal.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modales[index].showModal();
    centrarModal(modales[index]); // Centrar el modal al abrirlo
  });
});

btnCerrarModal.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modales[index].close();
  });
});
