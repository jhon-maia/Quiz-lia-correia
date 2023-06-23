// Função para calcular o resultado com base nas respostas
function calcularResultado() {
    // Obter todas as seleções de resposta
    var respostas = document.getElementsByTagName('select');
    var totalPontos = 0;
  
    // Calcular a pontuação total
    for (var i = 0; i < respostas.length; i++) {
      totalPontos += parseInt(respostas[i].value);
    }
  
    // Exibir o resultado com base na pontuação total
    if (totalPontos < 20) {
      return "Você está saudável.";
    } else if (totalPontos > 30 && totalPontos <= 40) {
      return "Indicativo de hipersensibilidade.";
    } else if (totalPontos > 40 && totalPontos < 100) {
      return "Absoluta certeza de hipersensibilidade.";
    } else if (totalPontos >= 100) {
      return "Sua saúde está ruim.";
    }
  }
  
  // Função para processar o envio do formulário
  function enviarFormulario(event) {
    event.preventDefault();
    var resultado = calcularResultado();
    console.log(resultado); // Exemplo: Exibir o resultado no console, mas você pode fazer algo diferente, como mostrar em uma div na página.
  }
  
  // Associar a função de envio do formulário ao evento de clique do botão
  var btnEnviar = document.querySelector('.btn.start');
  btnEnviar.addEventListener('click', enviarFormulario);
  