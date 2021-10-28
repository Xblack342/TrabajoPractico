const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menu y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'imagenes/open-menu.png'){
        e.target.setAttribute('src','imagenes/open-menu2.png');
    }else{
        e.target.setAttribute('src','imagenes/open-menu.png');
    }
});

const hover = document.querySelectorAll('.hoverimagenes::before')

hover.addEventListener('click', () => {
    
})