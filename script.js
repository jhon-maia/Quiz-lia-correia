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
      return "Você está saudável, você apresenta quase nenhum sintoma de hipersensibilidade.";
    } else if (totalPontos > 30 && totalPontos <= 40) {
      return "Indicativo de hipersensibilidade, é bom marcar uma consulta conosco para um tratamento e acompanhamento adequados.";
    } else if (totalPontos > 40 && totalPontos < 100) {
      return "Absoluta certeza de hipersensibilidade, seus sintomas apontam para uma presença alarmante para hipersensibilidade me su organismo, marque uma consulta conosco para iniciar o tratamento.";
    } else if (totalPontos >= 100) {
      return "Sua saúde está ruim, a hipersensibilidade afeta muito sua sáude e atividades diárias, marque uma consulta conosco para resolver tal problema.";
    }
  }
  
  // Função para processar o envio do formulário
  function enviarFormulario(event) {
    event.preventDefault();
    var resultado = calcularResultado();
    var divResultado = document.getElementById('resultado-page');
    divResultado.innerHTML = '<div class="heading">Resultado</div> <div class="main-text">' + resultado + '</div>'+ '<a href="https://liacorreia.carrd.co/" class="btn-return">voltar para o site</a>' ;
    mostrarPagina('resultado-page')
  }
  
  
  // Associar a função de envio do formulário ao evento de clique do botão
  var btnEnviar = document.querySelector('.btn.start');
  btnEnviar.addEventListener('click', enviarFormulario);

  function mostrarPagina(id) {
    // Oculta todas as páginas
    var paginas = document.getElementsByClassName('question-page');
    for (var i = 0; i < paginas.length; i++) {
      paginas[i].style.display = 'none';
    }
    console.log('alo')
  
    // Exibe a página especificada pelo ID
    var pagina = document.getElementById(id);
    if(pagina){
    pagina.style.display = 'block';
    }
   
  }

