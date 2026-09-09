async function cargarDatos() {
  try {
    const url = 'https://tu-usuario.github.io/tu-repositorio/datos.json';
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    
    console.log("Datos desde GitHub Pages:", datos);
  } catch (error) {
    console.error("Error al obtener el JSON:", error);
  }
}

cargarDatos();