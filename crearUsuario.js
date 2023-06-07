const usuario = document.getElementById("input-usuario");
const contraseña = document.getElementById("contraseña");
const contraseña2= document.getElementById("contraseñaRepetida");
const btnCrearCuenta= document.getElementById("btn-acceder");
const datos = {
    usuarios: []
}
const guardarUsuario = () => {
    btnCrearCuenta.addEventListener("click", e => {
      if (contraseña.value === contraseña2.value) {
        const nombreUsuario = usuario.value;
        const contraseñaCreada = contraseña.value;
  
        let datos;
        if (localStorage.getItem("datos")) {
          datos = JSON.parse(localStorage.getItem("datos"));
        } else {
          datos = { usuarios: [] };
        }
  
        const nuevoUsuario = {
          nombreUsuario: nombreUsuario,
          contraseña: contraseñaCreada,
          id: `${nombreUsuario}`
        };
  
        datos.usuarios.push(nuevoUsuario);
  
        document.getElementById("input-usuario").value = "";
        document.getElementById("contraseña").value = "";
        document.getElementById("contraseñaRepetida").value = "";
        alert("FELICITACIONES Usted Creo un Usuario Correctamente");
        console.log(datos.usuarios);
        localStorage.setItem("datos", JSON.stringify(datos));
        console.log("Datos guardados en el almacenamiento web");
        const ErrorPassword = document.querySelector(".avisoError");
        ErrorPassword.style.display = "none";
      } else {
        const ErrorPassword = document.querySelector(".avisoError");
        if (ErrorPassword.display != "none") {
          ErrorPassword.style.display = "flex";
        }
      }
    });
  };
  guardarUsuario()
// ````