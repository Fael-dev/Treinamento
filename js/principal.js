var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida nutricionista';

var paciente = document.querySelectorAll('.paciente');
console.log(paciente);
for(var i =0; i< paciente.length ; i++){
	console.log(paciente[i]);
	var tdPeso = paciente[i].querySelector('.info-peso');           
	var tdAltura = paciente[i].querySelector('.info-altura');	     	
	var tdImc = paciente[i].querySelector('.info-imc');

	// Armazenando o conteúdo da TD ================
	var peso = tdPeso.textContent; 
	var altura = tdAltura.textContent;

	// Variáveis de validação ======================
	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);	     

	// Validação dos dados =========================
	if(!pesoValido){ 
		paciente[i].classList.add("paciente-invalido");
		pesoValido = false;
	}
	if(!alturaValida){
		paciente[i].classList.add("paciente-invalido");
		alturaValida = false;
	}
	if (alturaValida && pesoValido){
		// Realizando o cálculo do IMC ============     
		var imc = calculaImc(peso,altura);
		// Printando calculo IMC na TD da linha ===
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
	
	function validaPeso(peso){
		if(peso >= 0 && peso < 1000){
			return true;
		}
		else{
			return false;
		}
	}
	function validaAltura(altura){
		if(altura >= 0 && altura <= 3.0){
			return true;
		}
		else{
			return false;
		}
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
		
		var erros = validaPaciente(paciente);
		
		
		if(erros.length > 0){
			exibeMsgErros(erros);
			return;
		}
		
		//Armazenando a tabela em uma variável, pelo ID.
		var tabela = document.querySelector("#tabela-pacientes");
		
		//Adicionando a linha de conteúdo criada dentro da tabela
		tabela.appendChild(pacienteTr);

		//Limpando formulário
		form.reset();
		var msgErro = document.querySelector("#mensagens-erro");
		msgErro.innerHTML = "";
	});

	
		function exibeMsgErros(erros){
			var ul = document.querySelector("#mensagens-erro");
			ul.innerHTML= ""
			erros.forEach(function(erro){
				var li = document.createElement("li");
				li.textContent = erro;
				ul.appendChild(li);
			});
		}
		
		
		//Funcao de obter paciente pelo formulário
		
		function obtemPacienteForm(form){

			var paciente = {
				nome: form.nome.value,
				peso: form.peso.value,
				altura: form.altura.value,
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
		
		//Funcao monta TD

		function montaTd(dado, classe){
			var td = document.createElement("td"); // Cria uma TD
			td.textContent = dado;			  // Adiciona o conteúdo
			td.classList.add(classe);			  // Adiciona a classe
			return td;
		}

		// Funcao valida paciente
	
		function validaPaciente(paciente){

			var erros = [];
			
			if(paciente.nome.length == 0) erros.push("O nome não pode ficar em branco!");
			if(!validaPeso(paciente.peso))  erros.push("Peso é inválido!"); 
			if(!validaAltura(paciente.altura))  erros.push("Altura é inválida!");
			if(paciente.altura.length == 0 ) erros.push("A altura não pode ficar em branco!");	
			if(paciente.peso.length == 0 ) erros.push("O peso não pode ficar em branco!");
			if(paciente.gordura.length == 0) erros.push("A gordura não pode ficar em branco!");

			return erros;
		}

     //===========================================================
     // SEPARAR ESSE BLOCO DE CÓDIGO ABAIXO EM OUTRO ARQUIVO REMOVER-PACIENTES.JS
     //===========================================================
	
	var pacientes = document.querySelectorAll(".paciente");

	pacientes.forEach(function(paciente){
		paciente.addEventListener("click", function(){
			console.log("Fui clicado com duplo click");
			this.remove(); //THIS está atrelado ao elemento que sofre o evento, no caso o `paciente`
		});
		
	});











