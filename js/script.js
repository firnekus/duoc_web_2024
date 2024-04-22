// Copia los productos de index.html 20 veces

try {
  if (document.getElementById('mini_producto')) {
    var tarjeta = document.getElementById('mini_producto').outerHTML;
    var tarjetas = '';
    for (i = 0; i < 20; i++) {
      tarjetas = tarjetas + tarjeta;
    }
    document.getElementById('mini_producto').outerHTML = tarjetas;
  }
} catch {

}
// Lee el contenido de un archivo llamado "menu_superior.html" donde está el código del menú de las páginas y lo copia al inicio de cada página
if (document.getElementById('menu')) {
  fetch('menu_superior.html').then(response => {
    return response.text();
  }).then(htmlContent => {
    document.getElementById('menu').innerHTML = htmlContent;
    window.scrollTo(0, 0);
  });
};

if (document.getElementById('footer')) {
  fetch('footer.html').then(response => {
    return response.text();
  }).then(htmlContent => {
    document.getElementById('footer').innerHTML = htmlContent;
    window.scrollTo(0, 0);
  });
};

// Función para detectar si el usuario prefiere el modo oscuro
function toggleDarkMode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// Llama a la función para que se ejecute cuando se carga la página
toggleDarkMode();

// Evento que detecta cambios en las preferencias de color del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleDarkMode);





try {
  document.getElementById("imgUpload").addEventListener("change", function (event) {
    // Obtener el archivo seleccionado
    const file = event.target.files[0];

    // Verificar si se seleccionó un archivo
    if (file) {
      // Crear un objeto FileReader
      const reader = new FileReader();

      // Cuando la lectura del archivo esté completa
      reader.onload = function (e) {
        // Actualizar la fuente de la imagen con la URL de datos leída
        document.querySelector(".card img").src = e.target.result;
      };

      // Leer el archivo como una URL de datos (data URL)
      reader.readAsDataURL(file);
    }
  });

  document.getElementById("showRePasswordBtn").addEventListener("click", function () {
    var passwordInput = document.getElementById("password");
    var rePasswordInput = document.getElementById("mostrar_contraseña");
    if (rePasswordInput.type === "password") {
      passwordInput.type = "text";
      rePasswordInput.type = "text";
      this.textContent = "Ocultar";
    } else {
      passwordInput.type = "password";
      rePasswordInput.type = "password";
      this.textContent = "Mostrar";
    }
  });

  document.getElementById("eliminarImagen").addEventListener("click", function () {
    document.getElementById("perfilImg").src = "img/placeholder.jpg";
  });


  document.getElementById("showPasswordBtn").addEventListener("click", function () {
    var passwordInput = document.getElementById("password");
    var rePasswordInput = document.getElementById("mostrar_contraseña");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      rePasswordInput.type = "text";
      this.textContent = "Ocultar";
    } else {
      passwordInput.type = "password";
      rePasswordInput.type = "password";
      this.textContent = "Mostrar";
    }
  });
} catch {

}



try {
  document.getElementById("showPasswordBtn").addEventListener("click", function () {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      this.innerHTML = '<i class="bi bi-eye-slash"></i>'; // Cambia el icono del botón a un ojo tachado
    } else {
      passwordInput.type = "password";
      this.innerHTML = '<i class="bi bi-eye"></i>'; // Cambia el icono del botón a un ojo
    }
  });
} catch {

}


function togglePasswordVisibility() {
  var passwordInput = document.getElementById("contraseñaGenerada");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function cerrarSesion() {
  // Aquí iría el código para cerrar la sesión, por ejemplo, redireccionar a la página de inicio de sesión.
  alert("Sesión cerrada exitosamente.");
  window.location.href = "cerrar_sesion.html"; // Cambia esto por la URL de tu página de inicio de sesión.
}



// Código JavaScript para cargar los productos desde la API
/* 
fetch('http://fakestoreapi.com/products')
    .then(respuesta => respuesta.json())
    .then(datos => {
        const contenedorProductos = document.getElementById('contenedor-productos');
        datos.forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('card', 'mb-3');
            divProducto.innerHTML = `
                <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.description}</p>
                    <p class="card-text">Precio: $${producto.price}</p>
                </div>
            `;
            contenedorProductos.appendChild(divProducto);
        });
    })
    .catch(error => console.error('Error al obtener los productos:', error));

    function cerrarMensaje(event) {
      document.getElementById('mensaje').style.display = 'none';
      event.stopPropagation(); // Evita que se propague el evento al hacer clic en la X
  }

  // Mostrar el mensaje emergente al recargar la página
  window.onload = function() {
      document.getElementById('mensaje').style.display = 'block';
  };
*/

try {
  try {
    document.getElementById("botonContrasena").addEventListener("click", function () {
      var passField = document.getElementById("inputPassword");
      passField.value = "Duoc@123"
      console.log(document.getElementById("sValue").checked)
    })

  } catch {

  }
  document.addEventListener("click", function (e) {
    if (document.title == "Usuarios") {
      if (e.target.name == "idButton") {
        var idField = document.getElementById("idField");
        var rutField = document.getElementById("rutField");
        var namesField = document.getElementById("namesField");
        var lastNames = document.getElementById("lastNames")
        var emailField = document.getElementById("emailField")
        var addressField = document.getElementById("addressField");
        var sValue = document.getElementById("sValue");
        var imagen = document.getElementById("perfilImg");
        var listaCuestiones = [idField, rutField, namesField, lastNames, emailField, addressField, sValue]
        var listasInfo = [document.getElementById("info1"), document.getElementById("info2"), document.getElementById("info3")]
        console.log("deciding...")
        console.log(e.srcElement.textContent)

        var test;
        switch (e.srcElement.textContent) {
          case "1":
            test = listasInfo[0]
            console.log("selected 1")
            break;
          case "2":
            test = listasInfo[1]
            console.log("selected 2")
            break;
          case "3":
            test = listasInfo[2]
            console.log("selected 3")
            break;
        }
        var gggg = test.children
        var testChildren = Array.prototype.slice.call(gggg)
        console.log(testChildren.length)
        for (let i = 0; i < testChildren.length; i++) {

          if (i == 7) {
            if (testChildren[i].textContent == "Si") {
              listaCuestiones[6].checked = true
            } else {
              listaCuestiones[6].checked = false
            }
          } else if (i == 8) {
            imagen.src = testChildren[i].children[0].src
          } else {
            listaCuestiones[i].value = testChildren[i].textContent
          }
        }
      }
    } else if (document.title = "Productos") {
      var idField = document.getElementById("idField");
      var rutField = document.getElementById("idCategoria");
      var namesField = document.getElementById("namesField");
      var lastNames = document.getElementById("descField")
      var emailField = document.getElementById("priceField")
      var addressField = document.getElementById("descSus");
      var sValue = document.getElementById("descOferta");
      var imagen = document.getElementById("perfilImg");
      var listaCuestiones = [idField, rutField, namesField, lastNames, emailField, addressField, sValue]
      var listasInfo = [document.getElementById("info30"), document.getElementById("info32"), document.getElementById("info120"), document.getElementById("info999")]
      console.log(e.srcElement.textContent)
      var test;
      switch (e.srcElement.textContent) {
        case "30":
          test = listasInfo[0]
          console.log("selected 1")
          break;
        case "32":
          test = listasInfo[1]
          console.log("selected 2")
          break;
        case "120":
          test = listasInfo[2]
          console.log("selected 3")
          break;
        case "999":
          test = listasInfo[2]
          console.log("selected 3")
          break;
      }
      var gggg = test.children
      var testChildren = Array.prototype.slice.call(gggg)
      console.log(testChildren.length)
      for (let i = 0; i < testChildren.length; i++) {
        console.log(i)
        if (i == 7) {
          imagen.src = testChildren[i].children[0].src
        } else {
          listaCuestiones[i].value = testChildren[i].textContent
        }
      }
    }
  })
} catch {

}

