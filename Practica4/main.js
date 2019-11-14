'use strict';

(function() {
  class EditableList extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });

      const editableListContainer = document.createElement('div');

      editableListContainer.classList.add('editable-list');

        // get attribute values from getters
        const title = this.title;
        const descripcion = this.descripcion;
        const image = this.image;

      editableListContainer.innerHTML = `
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </head>
        <div class="card">
                <div class="card-image">
                    <img src="${image}" >
                    <span class="card-title">${title}</span>
                </div>
                <div class="card-content">
                    <p>${descripcion}</p>
                </div>
                <button class="card-action grey darken-4" onclick="">
                    <a class="white-text">Seleccionar</a>
                </button>
        </div>
      `;
      shadow.appendChild(editableListContainer);
    }


    // gathering data from element attributes
    get title() {
        return this.getAttribute('title') || '';
      }


    // gathering data from element attributes
    get descripcion() {
        return this.getAttribute('descripcion') || '';
      }


    // gathering data from element attributes
    get image() {
        return this.getAttribute('image') || '';
    }

  }

  customElements.define('editable-list', EditableList);
})();


document.getElementById("content").innerHTML = 7;

var prueba = "Algo";

var event = new Event('build');
event.addEventListener('build', function (e) { prueba = e }, false);