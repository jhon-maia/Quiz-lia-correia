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
    var divResultado = document.getElementById('resultado-page');
    divResultado.innerHTML = '<div class="heading">Resultado</div> <div class="main-text">' + resultado + '</div>';
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

var container = document.querySelectorAll('.question-page');
container.classList.add('show');
