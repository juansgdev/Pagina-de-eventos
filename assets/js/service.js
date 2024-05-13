const URL = 'http://localhost:3000/';

// REQUISIÇÕES DE USUÁRIOS

export const getAllUsers = async () => {
    try {
        const response = await fetch(URL+'users');
        return response.json();
    } catch (error) {
        alert('Erro: ' + error);
    }
};

export const createUser = async (user) => {
    fetch(URL+'users', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => console.log('Sucesso: ' + data))
    .catch((error) => alert('Erro: ' + error));
};

// REQUISIÇÕES DE ORGANIZAÇÕES

export const getAllOrganizations = async () => {
    try {
        const response = await fetch(URL+'organizations');
        return response.json();
    } catch (error) {
        console.log('Erro: ' + error);
    }
};

export const createOrganization = async (organization) => {
    fetch(URL+'organizations', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(organization)
    })
    .then(response => response.json())
    .then(data => console.log('Sucesso: ' + data))
    .catch((error) => alert('Erro: ' + error));
};

// Requisições de eventos

export const getAllEvents = async () => {
    try {
        const response = await fetch(URL+'events');
        return response.json();
    } catch (error) {
        alert('Erro: ' + error);
    }
};

export const postEvent = async (event) => {
    fetch(URL+'events', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(event)
    })
    .then(response => response.json())
    .then(data => console.log('Sucesso: ' + data))
    .catch((error) => console.log('Erro: ' + error));
};

export const patchEvent = async (event) => {
    fetch(URL+'events'+`/${event.id}`, {
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(event)
    })
    .then(response => response.json())
    .then(data => console.log('sucesso: ' + data))
    .catch((error) => console.log('Erro: ' + error));
};

export const deleteEvent = async (id) => {
    fetch((URL+'events/')+`${id}`, {method: 'DELETE'})
    .then(response => response.json())
    .then(data => console.log('sucesso: ', data))
    .catch((error) => alert('Erro: ' + error));
};