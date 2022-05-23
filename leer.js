const btn = document.querySelector('#leer')

btn.addEventListener('click', () => {

    Swal.fire({
        title: 'BIENVENIDO!',
        icon: 'info',
        html: '<P class="pswal">En esta opcion se indicara un texto a modo informativo sobre la pagina y sus opciones</P>',
        confirmButtonText: '<p class="psalir">Salir</p>',
    })
})


