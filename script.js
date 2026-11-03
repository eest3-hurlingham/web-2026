document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (!hamburger) return;

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('nav-open');
    });

    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target)) {
            nav.classList.remove('nav-open');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const equipo = document.querySelector('#integracion .carrusel-inner');
    if (!equipo) return;

    [...equipo.children].forEach((ficha) => {
        const copia = ficha.cloneNode(true);
        copia.setAttribute('aria-hidden', 'true');
        equipo.append(copia);
    });
    equipo.classList.add('carrusel-inner--animado');
});

document.addEventListener('DOMContentLoaded', function () {
    const avisos = document.querySelector('#avisos');
    if (!avisos) return;

    const contenedor = avisos.querySelector('.avisos-paneles');
    const paneles = [...contenedor.querySelectorAll('.aviso')];
    const controles = avisos.querySelector('.avisos-controles');
    const estado = avisos.querySelector('.avisos-estado');
    const pausa = avisos.querySelector('.aviso-pausa');
    const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)');
    let actual = 0;
    let pausado = movimientoReducido.matches;
    let temporizador;

    function mostrar(indice) {
        actual = (indice + paneles.length) % paneles.length;
        paneles.forEach((panel, posicion) => {
            panel.hidden = posicion !== actual;
        });
        const titulo = document.createElement('span');
        titulo.className = 'avisos-estado-titulo';
        titulo.textContent = paneles[actual].querySelector('h3').textContent;
        estado.replaceChildren(`${actual + 1} / ${paneles.length} `, titulo);
    }

    function actualizarAvance() {
        window.clearInterval(temporizador);
        pausa.textContent = pausado ? 'Reproducir' : 'Pausar';
        const detenido = pausado || avisos.matches(':hover, :focus-within') || document.hidden;
        estado.setAttribute('aria-live', detenido ? 'polite' : 'off');
        if (!detenido) {
            temporizador = window.setInterval(() => mostrar(actual + 1), 3000);
        }
    }

    controles.querySelector('.aviso-anterior').addEventListener('click', () => mostrar(actual - 1));
    controles.querySelector('.aviso-siguiente').addEventListener('click', () => mostrar(actual + 1));
    pausa.addEventListener('click', () => {
        pausado = !pausado;
        actualizarAvance();
    });
    avisos.addEventListener('mouseenter', actualizarAvance);
    avisos.addEventListener('mouseleave', actualizarAvance);
    avisos.addEventListener('focusin', actualizarAvance);
    avisos.addEventListener('focusout', () => window.requestAnimationFrame(actualizarAvance));
    document.addEventListener('visibilitychange', actualizarAvance);
    movimientoReducido.addEventListener('change', () => {
        pausado = movimientoReducido.matches;
        actualizarAvance();
    });
    contenedor.setAttribute('data-carrusel', '');
    mostrar(0);
    controles.hidden = false;
    actualizarAvance();
});
