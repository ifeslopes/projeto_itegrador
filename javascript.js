


  // Função para enviar os dados do cadastro
  function cadastrar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var senha = document.getElementById('senha').value;

    // Criando um objeto com os dados do cadastro
    var cadastro = {
      nome: nome,
      email: email,
      telefone: telefone,
      senha: senha
    };

    // Armazenando os dados no localStorage
    if (localStorage.getItem('listaCadastro') === null) {
      localStorage.setItem('listaCadastro', JSON.stringify([cadastro]));
    } else {
      var cadastrosAnteriores = JSON.parse(localStorage.getItem('listaCadastro'));
      cadastrosAnteriores.push(cadastro);
      localStorage.setItem('listaCadastro', JSON.stringify(cadastrosAnteriores));
    }

    // Limpando os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('senha').value = '';

    // Exibindo mensagem de cadastro realizado com sucesso
    alert('Cadastro realizado com sucesso!');
  }

  // Adicionando um listener para o botão de cadastro
  document.getElementById('cadastrar').addEventListener('click', cadastrar);





     // Array de cadastros
 