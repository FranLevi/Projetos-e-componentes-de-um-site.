document.addEventListener("DOMContentLoaded", function() {
    const forem = document.getElementById("cadastroForm");
    const mensagem = document.getElementById("mensagem");

    forms.addEventListener("submit", function(event) {
        event.preventDefault();

        //Obtenha os valores dos campos do formulário
        const nome = document.getElementById("nome");
        const sobrenome = document.getElementById("sobrenome");
        const email = document.getElementById("email");
        const telefone = document.getElementById("telefone");
        const dataNascimento = document.getElementById("dataNascimento");
        const genero = document.querySelector('input[name="genero"]:checked');

        //Valide os campos (adapte as validações conforme necessário)
        if (nome === "" || sobrenome === "" || email === "" || telefone === "" || dataNascimento === "" || !genero) {
            mensagem.textContent = "Por favor, preencha todos os campos.";
        } else {
            mensagem.textContent = "Cadastro bem-sucedido!";
            // Você pode enviar os dados para um servidor aqui ou realizar outras ações.
        }
    });
});
