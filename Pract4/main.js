'use strict';

(function() {
  class EditableList extends HTMLElement {
    constructor() {
      super();

      // Creando variables a usar
      var title = this.title;
      const descripcion = this.descripcion;
      const image = this.image;

      //Creando estructura html
      editableListContainer.innerHTML = `
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </head>
        <div class="card" align="center">
                <div class="card-image">
                    <img src="${image}" >
                    <span class="card-title">${title}</span>
                </div>
                <div class="card-content">
                    <p>${descripcion}</p>
                </div>
                <button class="card-action grey darken-4" id="build" onclick="myFunction('${title}')">
                    <a class="white-text">Seleccionar</a>
                </button>
        </div>
      `;
      shadow.appendChild(editableListContainer);
    }


    // devolver título
    get title() {
        return this.getAttribute('title') || '';
      }

    // devolver descripción
    get descripcion() {
        return this.getAttribute('descripcion') || '';
      }

    // Devolver imagen
    get image() {
        return this.getAttribute('image') || '';
    }
  }

  // Creando elemento para usarlo posteriormente
  customElements.define('editable-list', EditableList);
})();

//Función que actualiza el valor a imprimir
function myFunction(prueba) {
  document.getElementById("demo").innerHTML = prueba;
}