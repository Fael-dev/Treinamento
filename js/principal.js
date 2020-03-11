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
	// SEPERAR EM UM NOVO ARQUIVO PESQUISA.JS
	
	var pesquisa = document.querySelector("#pesquisa-paciente");
	console.log(pesquisa);
	
	pesquisa.addEventListener("input",function(){
		console.log("Digitaram no campo pesquisa");
		console.log(this.value);

		var pacientes = document.querySelectorAll(".paciente");

		if(this.value.length > 0){
			//console.log("Algo foi digitado!");
			for(var i =0; i < pacientes.length; i++){
				var paciente = pacientes[i];
				var tdNome = paciente.querySelector(".info-nome");
				var nome = tdNome.textContent;
				if( nome != this.value ){
					paciente.classList.add("invisivel");
				}
				else{
				paciente.classList.remove("invisivel");
				}
			
			}	
		}else{
			for(var i =0; i < pacientes.length; i++	){
				pacientes[i].classList.remove("invisivel");
			}
		}

	});
	

















				