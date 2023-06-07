const passwordInput = document.getElementById("contraseñaUsuario");
const usuarioInput = document.getElementById("input-usuarioCreado")
const btnIngresar = document.getElementById("btn-ingresar");
const datosGuardados = localStorage.getItem("datos")
const datos = JSON.parse(datosGuardados)
const IngresarUsuario =()=>{
    btnIngresar.addEventListener("click",e=>{
        password = passwordInput.value
        usuario = usuarioInput.value
        let credencialesValidas = false;

    for (let i = 0; i < datos.usuarios.length; i++) {
  const usuarioActual = datos.usuarios[i];
    if (
    usuarioActual.nombreUsuario === usuario &&
    usuarioActual.contraseña === password
    ) {
    credencialesValidas = true;
    break;
    }
    }

    if (credencialesValidas) {
        const mjsError = document.querySelector(".avisoError");
        mjsError.style.display = "none";
        window.location.href ="muro.html";
        localStorage.setItem("usuario",usuario)
    } else {
    const mjsError = document.querySelector(".avisoError");
    mjsError.style.display = "flex";
    }
    })
}
IngresarUsuario()
// console.log(datos)