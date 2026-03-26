// 🔥 ESPERAR A QUE TODO CARGUE
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 📌 BOTÓN MENÚ
    // =========================
    const btnMenu = document.getElementById("btnMenu");
    const menu = document.getElementById("menuImagen");

    btnMenu.addEventListener("click", (e) => {
        e.preventDefault();
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });


    // =========================
    // 🛒 MODAL ORDENAR
    // =========================
    const btnOrdenar = document.getElementById("btnOrdenar");
    const modal = document.getElementById("ordenModal"); // 🔥 corregido ID
    const listaPedidos = document.getElementById("listaPedidos");

    btnOrdenar.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("show"); // 🔥 usa clases (como tu CSS)
    });

    // Cerrar al dar click fuera
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });


    // =========================
    // ➕ AGREGAR PEDIDOS
    // =========================
    const botonesAgregar = document.querySelectorAll(".agregarPedido");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", () => {
            const producto = boton.getAttribute("data-producto");

            const li = document.createElement("li");
            li.textContent = producto;

            listaPedidos.appendChild(li);
        });
    });


    // =========================
    // 📦 BOTÓN MIS PEDIDOS
    // =========================
    const btnPedidos = document.getElementById("btnPedidos");
    const pedidosModal = document.getElementById("pedidosModal");

    btnPedidos.addEventListener("click", (e) => {
        e.preventDefault();
        pedidosModal.classList.add("show");
    });

    pedidosModal.addEventListener("click", (e) => {
        if (e.target === pedidosModal) {
            pedidosModal.classList.remove("show");
        }
    });


    // =========================
    // 🎠 CARRUSEL + AUTOPLAY
    // =========================
    const track = document.querySelector('.carrusel-track');
    const images = document.querySelectorAll('.carrusel img');
    const btnNext = document.querySelector('.next');
    const btnPrev = document.querySelector('.prev');
    const carrusel = document.querySelector('.carrusel');

    let index = 0;

    function siguiente() {
        index++;
        if (index >= images.length) index = 0;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    function anterior() {
        index--;
        if (index < 0) index = images.length - 1;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    if (btnNext && btnPrev && carrusel) {

        btnNext.addEventListener('click', siguiente);
        btnPrev.addEventListener('click', anterior);

        // 🔄 AUTOPLAY CORRECTO
        let autoplay;

        function iniciarAutoplay() {
            autoplay = setInterval(siguiente, 3000);
        }

        function detenerAutoplay() {
            clearInterval(autoplay);
        }

        // iniciar SIEMPRE
        iniciarAutoplay();

        // pausa al pasar mouse
        carrusel.addEventListener('mouseenter', detenerAutoplay);

        // reanuda
        carrusel.addEventListener('mouseleave', iniciarAutoplay);
    }

});