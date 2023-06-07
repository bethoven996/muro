const textoPublicaciones = document.getElementById("textomuro");
const btnPublicar = document.getElementById("btnPublicar");
const muroPublicaciones = document.getElementById("publicaciones");
const usuarioQueIngreso = localStorage.getItem("usuario");
const inputDelete = document.getElementById("borrarPublicaciones")
const btnDelete = document.getElementById("btn-borrar")
let EscriturasMuro = [];
window.addEventListener('load', () => {
  console.log("pagina Cargada")
  obtenerPublicacionesGuardadas();
  publicar()
  borrarPublicaciones()
});

const publicar = () => {
  btnPublicar.addEventListener("click", e => {
    let inputValue = textoPublicaciones.value;
    const cuadroPublicaciones = document.createElement("div");
    cuadroPublicaciones.classList = "cuadroPublicaciones";
    muroPublicaciones.append(cuadroPublicaciones);
    const fechaActual = new Date();
    const opcionesFecha = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const fechaFormateada = fechaActual.toLocaleDateString(undefined, opcionesFecha);
    const horaFormateada = fechaActual.toLocaleTimeString(undefined, opcionesHora);
    cuadroPublicaciones.innerText = `${fechaFormateada} a las ${horaFormateada}
                                      El usuario ${usuarioQueIngreso} ha publicado: 
                                                                    ${inputValue}`;
    EscriturasMuro.push(cuadroPublicaciones.innerText);
    localStorage.setItem("EscriturasMuro", JSON.stringify(EscriturasMuro));
    textoPublicaciones.value = ""
  });
};

const obtenerPublicacionesGuardadas = () => {
  const publicacionesGuardadas = localStorage.getItem("EscriturasMuro");
  if (publicacionesGuardadas) {
    EscriturasMuro = JSON.parse(publicacionesGuardadas);
    EscriturasMuro.forEach(publicacion => {
      const cuadroPublicaciones = document.createElement("div");
      cuadroPublicaciones.classList = "cuadroPublicaciones";
      cuadroPublicaciones.innerText = publicacion;
      muroPublicaciones.appendChild(cuadroPublicaciones);
    });
  }
};


const borrarPublicaciones =()=>{
  btnDelete.addEventListener("click",e=>{
    let inputDelete2 = inputDelete.value
    if(inputDelete2 === "admin"){
      localStorage.removeItem("EscriturasMuro")
      alert("publicaciones Borradas con Exito, actualiza la pagina para ver los cambios")
    }else {
      alert("Solo el administrador puede borrar las publicaciones.")
      inputDelete2.value = ""
    }
  })
}


// ````