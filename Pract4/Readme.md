
# Práctica 4: Web Component

Se ha realizado la práctica 4 en ficheros sueltos y también en la página principal de jekyll. Esto se podrá ver en:

- Para ver el despliegue se encuentra en : https://omar97perez.github.io/SYTWC/
- Práctica 4 en jekyll: https://github.com/Omar97perez/SYTWC/tree/master/Pract3
- Práctica 3  en ficheros sueltos: repositorio actual.

## Para realizar esta práctica se ha hecho uso del código javascript siguiente:

```javascript
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
```
A su vez, se ha llamada al componente de la siguiente forma:

```html
    <div class="row margen-50 container">
        <div class="col s12 m7" style="max-width:100%;width:300px;height:auto;">
            <editable-list title="Jokker" descripcion="Arthur Fleck (Joker) es un hombre que se enfrenta a la crueldad y al desprecio de la sociedad actual. Vive ignorado por un sistema que le permite pasar de la vulnerabilidad a la inmoralidad." image="https://cartelera.elperiodico.com/estaticos//0/813/813210_p.jpg"></editable-list>
        </div>
        <div class="col s12 m7" style="max-width:100%;width:300px;height:auto;">
            <editable-list title="Aladdin" descripcion="Basada en el famoso cuento Aladino y la lámpara maravillosa, narra cómo en el exótico paisaje del mítico reino árabe de Agrabah, Aladdin, un ingenioso joven que vive en la extrema pobreza." image="https://cartelera.elperiodico.com/estaticos//0/790/790308_p.jpg"></editable-list>
        </div>
        <div class="col s12 m7" style="max-width:100%;width:300px;height:auto;">
            <editable-list title="It" descripcion="Una película protagonizada por niños pero que los menores deben ver con sus mayores. Esa es la paradoja de It, adaptación al cine para adultos de la novela más famosas de Stephen King." image="https://cartelera.elperiodico.com/estaticos//0/675/675903_p.jpg"></editable-list>
        </div>
        <div class="col s12 m7" style="max-width:100%;width:300px;height:auto;">
            <editable-list title="It" descripcion="Una película protagonizada por niños pero que los menores deben ver con sus mayores. Esa es la paradoja de It, adaptación al cine para adultos de la novela más famosas de Stephen King." image="https://cartelera.elperiodico.com/estaticos//0/675/675903_p.jpg"></editable-list>
        </div>
    </div>
```

Por último, para recoger el cambio de la variable y mostrarlo por pantalla se usa:

```html
      <div class="row" align="center">
              <h5>La película seleccionada ha sido: <p id="demo"></p></h5>
      </div>
```

