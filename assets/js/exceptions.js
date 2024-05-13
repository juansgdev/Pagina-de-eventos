export const formError = () => {
    alert('Tente novamente e preencha os campos corretamente!');
    location.reload();
};

export const userOrEmailExistsError = () => {
    alert('Nome de usuário ou email já existe! Tente novamente ou entre.');
    location.reload();
};

export const userEmailOrPasswordIncorrect = () => {
    alert('Nome de usuário/Email ou senha incorretos! Tente novamente ou cadastre-se.');
    location.reload();
};