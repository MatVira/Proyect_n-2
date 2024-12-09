//Scrip_registros

const cargarDatosUsuarios = () => {
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
    if (usuariosRegistrados.length > 0) {
        const tabla = document.getElementById("tablaDatos");
        tabla.innerHTML = usuariosRegistrados
            .map(usuario => `
                <tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.cedula}</td>
                    <td>${usuario.nombres}</td>
                    <td>${usuario.fechaNacimiento}</td>
                    <td>${usuario.ciudad}</td>
                </tr>
            `)
            .join('');
    } else {
        alert("No hay datos de usuarios registrados.");
    }
};

window.onload = cargarDatosUsuarios;
