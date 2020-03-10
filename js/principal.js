var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida nutricionista';

var paciente = document.querySelectorAll('.paciente');
console.log(paciente);
for(var i =0; i< paciente.length ; i++){
	console.log(paciente[i]);
	var tdPeso = paciente[i].querySelector('.info-peso');           
	var tdAltura = paciente[i].querySelector('.info-altura');	     	
	var tdImc = paciente[i].querySelector('.info-imc');

	// Armazenando o conteúdo da TD
	var peso = tdPeso.textContent; 
	var altura = tdAltura.textContent;

	// Variáveis de validação
	var pesoValido = true;
	var alturaValida = true;	     

	// Validação dos dados
	if(peso <= 0 || peso >= 1000){
		console.log('Peso inválido!');
		pesoValido = false;
	}
	if(altura <= 0 || altura >= 3.00){
		console.log('Altura inválida');
		alturaValida = false;
	}
	if (alturaValida && pesoValido){
		// Realizando o cálculo do IMC			     
		var imc = calculaImc(peso,altura);
		// Printando calculo IMC na TD da linha
		tdImc.textContent = imc;
		console.log(imc);	
	}
	else{
		tdImc.textContent = 'Altura e/ou peso inválidos!';
		paciente[i].classList.add('paciente-invalido'); 
		// paciente[i].style.backgroundColor = 'red'; => Outra forma
	}
}

	function calculaImc(peso,altura){
		var imc = 0;
		imc = peso/(altura*altura);
		return imc.toFixed(2);
	}

    //===========================================================
    // SEPARAR ESSE BLOCO DE CÓDIGO ABAIXO EM OUTRO ARQUIVO FORM.JS
    //===========================================================

	var botao = document.querySelector("#adicionar-paciente");

	botao.addEventListener("click", function(event){
		event.preventDefault();
		
		var form = document.querySelector("#form-cadastro");
		//Chamando função que ontem os dados do formulário
		var paciente = obtemPacienteForm(form);
		
		//Chamando função que monta a linha
		var pacienteTr = montarTr(paciente);

		//Armazenando a tabela em uma variável, pelo ID.
		var tabela = document.querySelector("#tabela-pacientes");
		
		//Adicionando a linha de conteúdo criada dentro da tabela
		tabela.appendChild(pacienteTr);

		//Limpando formulário
		form.reset();

	});
		
		//Funcao de obter paciente pelo formulário
		
		function obtemPacienteForm(form){

			var paciente = {
				nome: form.nome.value,
				peso: form.peso.value,
				altura: form.peso.value,
				gordura: form.gordura.value,
				imc: calculaImc(form.peso.value, form.altura.value)
			}			
			return paciente;
		}
		
		// Funcao de montar TR
		
		function montarTr(paciente){
			var pacienteTr = document.createElement("tr");
			pacienteTr.classList.add("paciente");
			console.log(pacienteTr);
	
			// Montando as TDs, adicionando conteúdo e classe - E adicionando as TDs d	a TR
			pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
			pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
			pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
			pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
			pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
			
			return pacienteTr;
		}
		function montaTd(dado, classe){
			var td = document.createElement("td"); // Cria uma TD
			td.textContent = dado;			  // Adiciona o conteúdo
			td.classList.add(classe);			  // Adiciona a classe
			return td;
		}














