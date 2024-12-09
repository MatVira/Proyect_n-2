//Scrip_Pag3

const registrarUsuario = () => {
    const id = document.getElementById("id").value;
    const cedula = document.getElementById("cedula").value;
    const nombres = document.getElementById("nombres").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const ciudad = document.getElementById("ciudad").value;

    if (id && cedula && nombres && fechaNacimiento && ciudad) {
        const usuario = { id, cedula, nombres, fechaNacimiento, ciudad };
        const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
        usuariosRegistrados.push(usuario);
        localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));
        window.location.href = "index_registro.html";
    } else {
        alert("Por favor, complete todos los campos.");
    }
};


document.getElementById("registrarBtn").onclick = registrarUsuario;
