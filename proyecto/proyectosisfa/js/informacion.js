const tabla = document.querySelector('#lista-usuarios tbody');

function cargarUsuarios() {
    fetch('/js/informacion.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.manzana}</td>
                    <td>${usuario.villa}</td>
                    <td>${usuario.cedula}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.telefono}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.fecha_inicio}</td>
                    <td>${usuario.estado}</td>
                    
                `;
                tabla.appendChild(row);

                

            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();
