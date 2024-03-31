document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("checkbox-recomendados");
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      crearTablaRecomendados();
    } else {
      eliminarTablaRecomendados();
    }
  });

  function crearTablaRecomendados() {
    var contenedor = document.getElementById("hotel_div_recomendados"); //este es el id donde se va a guardar la tabla
    var tabla_existe = document.getElementById("hotel_tabla_recomendados");
    if (!tabla_existe) {
      var tabla = document.createElement("table");
      tabla.id = "hotel_tabla_recomendados";
      tabla.innerHTML = `
        <tr>
          <th>Hotel</th>
          <th>Calificación</th>
          <th>Precio</th>
        </tr>
        <tr>
          <td>Hotel Ejemplo 1</td>
          <td>9.0</td>
          <td>$200</td>
        </tr>
        <tr>
          <td>Hotel Ejemplo 2</td>
          <td>8.5</td>
          <td>$150</td>
        </tr>
      `;
      contenedor.appendChild(tabla);
    }
  }

  function eliminarTablaRecomendados() {
    var tabla = document.getElementById("hotel_tabla_recomendados");
    if (tabla) {
      tabla.remove();
    }
  }

  document
    .getElementById("Hotel_form_Ciudad")
    .addEventListener("submit", function (e) {
      e.preventDefault(); //esta funcion es para que no se recargue la pagina

      var ciudad = document.getElementById("hoteles_opciones_ciudad").value;

      if (ciudad === "bogota" || ciudad === "seleccionar") {
        var div_mapa = document.getElementById("hoteles_div_mapa");
        var mapa_existe = document.getElementById("hotel_mapa_ciudad");
        if (!mapa_existe) {
          var mapa_ciudad = document.createElement("iframe");
          mapa_ciudad.id = "hotel_mapa_ciudad";
          mapa_ciudad.src =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.51141489705!2d-74.107807!3d4.64829755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1711842294751!5m2!1ses!2sco";
          mapa_ciudad.width = "600";
          mapa_ciudad.height = "450";
          mapa_ciudad.style.border = "0";
          mapa_ciudad.allowfullscreen = true;
          mapa_ciudad.loading = "lazy";
          mapa_ciudad.referrerpolicy = "no-referrer-when-downgrade";

          div_mapa.appendChild(mapa_ciudad);
        }
        var elementos = document.querySelectorAll(".hoteles_Bogota");

        elementos.forEach(function (elemento) {
          if (elemento.style.display === "none") {
            elemento.style.display = "grid";
          }
        });
      } else {
        var hoteles = document.querySelectorAll(".hoteles_Bogota");
        var mapa_existe = document.getElementById("hotel_mapa_ciudad");
        mapa_existe.style.display = "none";
        hoteles.forEach(function (elemento) {
          elemento.style.display = "none";
        });
      }
    });

  ///esto es para la suma del input
  var estrellasInput = document.getElementById("Hotel_input_NumEstrellas");
  estrellasInput.addEventListener("change", function () {
    var n = parseInt(this.value, 10);
    if (!isNaN(n)) {
      alert("La suma de 0 hasta " + n + " es: " + sumaDeCeroAN(n));
    } else {
      alert("Por favor, ingresa un número válido.");
    }
  });

  function sumaDeCeroAN(n) {
    var suma = 0;
    for (var i = 0; i <= n; i++) {
      suma += i;
    }
    return suma;
  }
});
