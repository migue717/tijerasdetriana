
// ------------- MODIFICAR HORARIO -----------

// Variables

consultaApi();

const portfolio = document.querySelector('#portfolio');
const token = 'f709dbfa3ff55e05765e6c7653908a26';

function consultaApi() {

    const user = '1559246331138811';

    const url = `https://graph.instagram.com/${user}?fields=id,media_type,media_url,username,timestamp&access_token=${token}`;

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
