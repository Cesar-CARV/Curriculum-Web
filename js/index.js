const hobbies = document.querySelectorAll(".hobbies__hobbie");

hobbies.forEach(hobbie => {
    hobbie.addEventListener('click', e => {
        e.stopPropagation();

        let content;
        let title;

        if (hobbie.id === "hobbie-draw"){
            title = "Dibujar";
            content = `
            <div>
                <p>
                    Este es uno de los dibujos que he hecho.
                    Siempre me ha gustado el dibujo y lo que le puede transmitir a otras personas.
                </p>
            </div>
            <div class="image-container">
                <img src="photos/dibujo.jpg"></img>
            </div>
            `;
        }

        if (hobbie.id === "hobbie-informatic"){
            title = "Informatica";
            content = `
            <div>
                <p>
                    Desde que era niño siempre me preguntaba el como funcionaban las aplicaciones de las computadoras,
                    celulares y de mas dispositivos, por lo que desde que iba en secundaria me llamo la atencion la programacion.
                </p>
            </div>
            <div class="image-container">
                <img src="photos/pc.jpg"></img>
            </div>
            `;
        }

        if (hobbie.id === "hobbie-skate"){
            title = "Skate";
            content = `
            <div>
                <p>
                    Me gusta patinar ya que es una forma de despejar la mente y de ejercitar el cuerpo.
                </p>
            </div>
            <div class="image-container">
                <img src="photos/skates.jpeg"></img>
            </div>
            `;
        }

        if (hobbie.id === "hobbie-music"){
            title = "Musica";
            content = `
            <div>
                <p>
                    La musica siempre me ah gustado ya que como no era muy sociable de niño, la musica me ayudaba a pasarla bien ademas
                    de que es una forma de relajarse.
                </p>
            </div>
            <div class="image-container">
                <img src="photos/musica.png"></img>
            </div>
            `;
        }

        createModal(title, content);
        
    });
});

const educations = document.querySelectorAll(".education-container__education");

educations.forEach(educ => {
    educ.addEventListener('click', e => {
        e.stopPropagation();
            
        let title;
        let content;
        
        if (educ.id === "education-platzi"){
            title = "Platzi";
            content = `
            <div>
                <span>Links de los cursos</span>
                <ul>
                    <li><a href="https://platzi.com/cursos/programacion-basica/" target="_blank">programacion basica</a></li><br/>
                    <li><a href="https://platzi.com/cursos/pensamiento-logico/" target="_blank">pensamiento logico</a></li><br/>
                    <li><a href="https://platzi.com/cursos/terminal/" target="_blank">terminal y linea de comandos</a></li><br/>
                </ul>
            </div>
            `;
        }
        else if (educ.id === "education-js"){
            title = "JavaScript";
            content = `
            <div>
                <span>Links de los cursos</span>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=z95mZVUcJ-E" target="_blank">Curso de JAVASCRIPT desde CERO (Completo) - Nivel JUNIOR</a></li><br/>
                    <li><a href="https://www.youtube.com/watch?v=xOinGb2MZSk&t=26752s" target="_blank">Curso de JAVASCRIPT desde CERO (Completo) - Nivel MID LEVEL</a></li><br/>
                </ul>
            </div>
            `;
        }
        else if (educ.id === "education-css"){
            title = "CSS";
            content = `
            <div>
                <span>Link del curso</span><br>
                <a href="https://www.youtube.com/watch?v=OWKXEJN67FE&t=50s" target="_blank">Curso de CSS desde CERO (Completo)</a>
            </div>
            `;
        }
        else if (educ.id === "education-html5"){
            title = "HTML5";
            content = `
            <div>
                <span>Link del curso</span><br>
                <a href="https://www.youtube.com/watch?v=kN1XP-Bef7w&t=49s" target="_blank">Curso de HTML5 desde CERO (Completo)</a>
            </div>
            `;
        }

        else if (educ.id === "education-conalep"){
            title = "Conalep";
            content = `
            <div>
                <span>Links de contacto del plantel</span><br>
                <a href="http://www.conalepsonora.edu.mx/plantel.aspx?ID=253" target="_blank">Plantel</a><br/>
                <a href="https://www.facebook.com/conalep.aguaprieta/" target="_blank">Pagina de Facebook del plantel</a><br/>
            </div>
            `;
        }

        createModal(title, content);
    });
});

const createModal = (title, content) => {
    const basicHTML = `
    <div class="modal__card">
        <div class="modal__card__menu">
            <h3 class="modal__card__menu__title">${title}</h3>
            <button class="modal__card__menu__buttonX">X</button>
        </div>
        <div class="modal__card__content">
            ${
                content
            }
        </div>
    </div>
    `

    const modal = document.createElement('div');
    modal.className = "modal";
    modal.innerHTML = basicHTML;

    modal.addEventListener('click', e => {
        document.body.removeChild(modal);
    });

    let card = modal.querySelector('.modal__card');
    card.addEventListener('click', e => {
        e.stopPropagation();
    });

    let closeButton = modal.querySelector(".modal__card__menu__buttonX");
    closeButton.addEventListener('click', e => {
        e.stopPropagation();
        document.body.removeChild(modal);
    });

    document.body.appendChild(modal);
}