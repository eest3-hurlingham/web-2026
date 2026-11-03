document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('nav-open');
    });

    document.addEventListener('click', function (e) {
        nav.querySelectorAll('details[open]').forEach((menu) => {
            if (!menu.contains(e.target)) menu.open = false;
        });

        if (!nav.contains(e.target)) {
            nav.classList.remove('nav-open');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape' || e.defaultPrevented) return;

        const abiertos = [...nav.querySelectorAll('details[open]')];
        if (abiertos.length) {
            const menu = abiertos.find((item) => item.contains(document.activeElement)) ?? abiertos[0];
            abiertos.forEach((item) => { item.open = false; });
            menu.querySelector('summary').focus();
            e.preventDefault();
        } else if (nav.classList.contains('nav-open')) {
            nav.classList.remove('nav-open');
            hamburger.focus();
            e.preventDefault();
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
    document.querySelectorAll('.galeria-album').forEach((album) => {
        const destacada = album.querySelector('.galeria-destacada');
        const enlace = destacada.querySelector('a');
        const imagen = destacada.querySelector('img');
        const indicador = destacada.querySelector('figcaption');
        const miniaturas = [...album.querySelectorAll('.galeria-fotos a')];
        let seleccionada = miniaturas[0];

        seleccionada.setAttribute('aria-current', 'true');
        indicador.textContent = `Foto 1 de ${miniaturas.length}`;
        miniaturas.forEach((miniatura, indice) => {
            miniatura.setAttribute('aria-label', `Ver foto ${indice + 1} en grande`);
            miniatura.addEventListener('click', (evento) => {
                if (evento.ctrlKey || evento.metaKey || evento.shiftKey || evento.altKey) return;
                evento.preventDefault();
                seleccionada.removeAttribute('aria-current');
                seleccionada = miniatura;
                seleccionada.setAttribute('aria-current', 'true');
                enlace.href = miniatura.href;
                imagen.src = miniatura.href;
                indicador.textContent = `Foto ${indice + 1} de ${miniaturas.length}`;
                enlace.focus({ preventScroll: true });
                destacada.scrollIntoView({ block: 'nearest' });
            });
        });
    });
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
