
// ------------- MODIFICAR HORARIO -----------

// Variables

consultaApi();

const portfolio = document.querySelector('#portfolio');
const token = '';

function consultaApi() {

    const user = '1212733062652290';

    const url = `https://api.instagram.com/oauth/authorize
    ?client_id=${user}
    &redirect_uri=https://gpbgolf.com
    &scope={scope}
    &response_type=user_profile, user_media`;

    fetch(url)
        .then(response => response)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    
}


// Funcion para recuperar datos de la web



// loadEventListeners();
// function addEventListeners() {
    
    
    
// }




//Función para cambiar datos de la web
