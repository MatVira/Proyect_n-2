//Scrip_Pag2

// Estructura IF: Comparar dos números
const compararNumeros = () => {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultadoDiv = document.getElementById("resultadoIf");

    if (numero1 > numero2) {
        resultadoDiv.textContent = `El mayor es: ${numero1}`;
    } else if (numero1 < numero2) {
        resultadoDiv.textContent = `El mayor es: ${numero2}`;
    } else {
        resultadoDiv.textContent = "Ambos números son iguales.";
    }
};

// Estructura SWITCH: Mostrar mes correspondiente
const mostrarMes = () => {
    const mes = parseInt(document.getElementById("mes").value);
    let nombreMes = "";

    switch (mes) {
        case 1:
            nombreMes = "Enero"; 
        break;
        case 2:
            nombreMes = "Febrero";
            break;
        case 3:
            nombreMes = "Marzo";
            break;
        case 4:
            nombreMes = "Abril"; 
            break;
        case 5:
            nombreMes = "Mayo";
            break;
        case 6:
            nombreMes = "Junio";
            break;
        case 7:
            nombreMes = "Julio";
            break;
        case 8:
            nombreMes = "Agosto";
            break;
        case 9:
            nombreMes = "Septiembre";
            break;
        case 10:
            nombreMes = "Octubre";
            break;
        case 11:
            nombreMes = "Noviembre";
            break;
        case 12:
            nombreMes = "Diciembre";  
            break;
        default: nombreMes = "Número inválido. Ingrese un número entre 1 y 12.";
    }

    alert(nombreMes);
};

// Gestión de Arrays: Agregar y mostrar nombres
const nombres = [];

const agregarNombre = () => {
    const nombre = document.getElementById("nombre").value;
    const listaDiv = document.getElementById("listaNombres");

    if (nombre.trim() !== "") {
        nombres.push(nombre);
        listaDiv.textContent = `Nombres ingresados: ${nombres.join(", ")}`;
        document.getElementById("nombre").value = "";
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
};

// Función a los botones de la pagina dos
document.getElementById("compararBtn").onclick = compararNumeros;
document.getElementById("mostrarMesBtn").onclick = mostrarMes;
document.getElementById("agregarNombreBtn").onclick = agregarNombre;
