import { formError, userEmailOrPasswordIncorrect, userOrEmailExistsError } from "./exceptions.js";
import { getAllUsers, getAllOrganizations, createUser, createOrganization } from "./service.js";

const formulario = document.getElementById('dynamicForm');

export const userSignUpForm = () => {
    formulario.innerHTML = 
    `
    <div>
        <label for="name">Nome</label>
        <input type="text" id="name" required>
    </div>

    <div>
        <label for="surname">Sobrenome</label>
        <input type="text" id="surname" required>
    </div>

    <div>
        <label for="username">Nome de usuário</label>
        <input type="text" id="username" required>
    </div>

    <div>
        <label for="email">Email</label>
        <input type="email" id="email">
    </div>

    <div>
        <label for="age">Idade</label>
        <input type="number" id="age" required>
    </div>

    <div>
        <label for="password">Senha</label>
        <input type="password" id="password" required>
    </div>

    <button id="submit" type="submit">confirmar</button>
    `;
    document.getElementById('submit').onclick = (event) => {
        event.preventDefault();

        let myUsername = document.getElementById('username').value;
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let myEmail = document.getElementById('email').value;
        let age = document.getElementById('age').value;
        let password = document.getElementById('password').value;

        myUsername = myUsername.trim();
        name = name.trim();
        surname = surname.trim();
        myEmail = myEmail.trim();
        age = age.trim();
        password = password.trim();

        const myUser = {
            username: myUsername,
            name: name,
            surname: surname,
            email: myEmail,
            age: age,
            password: password
        };

        if (myUsername !== '' && name !== '' && surname !== '' && myEmail !== '' && age !== '' && password !== '') {
            getAllUsers().then(users => {
                if (users.find(user => user.username == myUsername) == undefined) {
                    if (users.find(user => user.email == myEmail) == undefined) {
                        alert('Sucesso! A página será recarregada, após isso entre com nome de usuário e senha.');

                        createUser(myUser);
                    } else {
                        userOrEmailExistsError();
                    }
                } else {
                    userOrEmailExistsError();
                }
            });
        } else {
            formError();
        }
    };
};

export const userLogInForm = () => {
    formulario.innerHTML = 
    `
    <div>
        <label for="user">Nome de usuário</label>
        <input type="text" id="user" required>
    </div>

    <div>
        <label for="password">Senha</label>
        <input type="password" id="password" required>
    </div>

    <button id="submit" type="submit">confirmar</button>
    `;
    getAllUsers().then(users => {
        document.getElementById('submit').onclick= () => {
            let simpleUser = document.getElementById('user').value;
            let password = document.getElementById('password').value;

            simpleUser = simpleUser.trim();
            password = password.trim();

            if (simpleUser !== '' && password !== '') {
                if (users.find(user => user.username == simpleUser) !== undefined) {
                    const user = users.find(user => user.username == simpleUser);

                    if (user.password == password) {
                        localStorage.setItem('userType','simple user');
                        localStorage.setItem('user',`${JSON.stringify(user)}`);
                    } else {
                        userEmailOrPasswordIncorrect();
                    }
                } else {
                    userEmailOrPasswordIncorrect();
                }
            } else {
                formError();
            }
        }
    });
};

export const organizationSignUpForm = () => {
    formulario.innerHTML = 
    `
    <div>
        <label for="organizationName">Nome da organização</label>
        <input type="text" id="organizationName" required>
    </div>

    <div>
        <label for="username">Nome de usuário de organização</label>
        <input type="text" id="username" required>
    </div>

    <div>
        <label for="email">Email</label>
        <input type="email" id="email" required>
    </div>

    <div>
        <label for="eventType">Tipo de evento realizado</label>
        <select name="eventType" id="eventType" required>
            <option value="" disabled selected hidden>Selecione:</option>
            <option value="Show">Show</option>
            <option value="Reunião">Reunião</option>
            <option value="WorkShop">WorkShop</option>
            <option value="Festival">Festival</option>
            <option value="Feira">Feira</option>
            <option value="Desfile">Desfile</option>
            <option value="Conferência">Conferência</option>
            <option value="Seminário">Seminário</option>
            <option value="Treinamento">Treinamento</option>
            <option value="Torneio">Torneio</option>
            <option value="Outro">Outro</option>
        </select>
    </div>

    <div>
        <label for="organizationLocation">Endereço sede da organização</label>
        <input type="text" id="organizationLocation" required>
    </div>

    <div>
        <label for="password">Senha</label>
        <input type="password" id="password" required>
    </div>

    <button type="submit" id="submit">confirmar</button>
    `;
    document.getElementById('submit').onclick = (event) => {
        event.preventDefault();

        let name = document.getElementById('organizationName').value;
        let myUsername = document.getElementById('username').value;
        let myEmail = document.getElementById('email').value;
        let eventType = document.getElementById('eventType').value;
        let organizationLocation = document.getElementById('organizationLocation').value;
        let password = document.getElementById('password').value;

        name = name.trim();
        myUsername = myUsername.trim();
        myEmail = myEmail.trim();
        eventType = eventType.trim();
        organizationLocation = organizationLocation.trim();
        password = password.trim();

        const myOrganization = {
            name: name,
            username: myUsername,
            email: myEmail,
            eventType: eventType,
            location: organizationLocation,
            password: password
        };

        if (name !== '' && myUsername !== '' && myEmail !== '' && eventType !== '' && organizationLocation !== '' && password !== '') {
            getAllOrganizations().then(orgs => {
                if (orgs.find(org => org.username == myUsername) == undefined) {
                    if (orgs.find(org => org.email == myEmail) == undefined) {
                        alert('Sucesso! A página será recarregada, após isso entre com seu nome de usuário e senha.');

                        createOrganization(myOrganization);
                    } else {
                        userOrEmailExistsError();
                    }
                } else {
                    userOrEmailExistsError();
                }
            });
        } else {
            formError();
        }
    };
};

export const organizationLogInForm = () => {
    formulario.innerHTML = 
    `
    <div>
        <label for="orgUser">Nome de usuário de organização</label>
        <input type="text" id="orgUser" required>
    </div>

    <div>
        <label for="password">Senha</label>
        <input type="password" id="password" required>
    </div>

    <button id="submit" type="submit">confirmar</button>
    `;
    getAllOrganizations().then(orgs => {
        document.getElementById('submit').onclick = () => {
            let organizationUsername = document.getElementById('orgUser').value;
            let password = document.getElementById('password').value;

            organizationUsername = organizationUsername.trim();
            password = password.trim();

            if (organizationUsername !== '' && password !== '') {
                if (orgs.find(org => org.username == organizationUsername) !== undefined) {
                    const orgUser = orgs.find(org => org.username == organizationUsername);

                    if (orgUser.password == password) {
                        localStorage.setItem('userType','organization');
                        localStorage.setItem('orgUser',`${JSON.stringify(orgUser)}`);
                    } else {
                        userEmailOrPasswordIncorrect();
                    }
                } else {
                    userEmailOrPasswordIncorrect();
                }
            } else {
                formError();
            }
        }
    });
};