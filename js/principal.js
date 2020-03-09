var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida nutricionista';

	// Acessando as linhas da tabela e armazenando conteúdos de TDs em variáveisdo primeiro paciente

var paciente = document.querySelectorAll('.paciente');
console.log(paciente);
for(var i =0; i< paciente.length ; i++){
	console.log(paciente[i]);
	var tdPeso = paciente[i].querySelector('.info-peso');           
	var tdAltura = paciente[i].querySelector('.info-altura');	     	
	var tdImc = paciente[i].querySelector('.info-imc');
		// Variáveis de validação
	var pesoValido = true;
	var alturaValida = true;	     

		// Armazenando o conteúdo da TD
	var peso = tdPeso.textContent; 
	var altura = tdAltura.textContent;

	if(peso <= 0 || peso >= 1000){
		console.log('Peso inválido!');
		pesoValido = false;
		tdImc.textContent = 'Peso inválido!';
	}
	if(altura <= 0 || altura >= 3.00){
		console.log('Altura inválida');
		alturaValida = false;
		tdImc.textContent = 'Altura inválida';
	}
	if (alturaValida && pesoValido){
			// Realizando o cálculo do IMC			     
		var imc = peso/(altura*altura);
			// Printando calculo IMC em TD da linha
		tdImc.textContent = imc.toFixed(2);
		console.log(imc);	
	}
	else{
		tdImc.textContent = 'Altura e/ou peso inválidos!';
		paciente[i].classList.add('paciente-invalido'); 
		// paciente[i].style.backgroundColor = 'red'; => Outra forma
	}

}

var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
	event.preventDefault();
	console.log("Evento Funcionando!");
});

// botao.addEventListener("click", mostrarMsg); =>  Evento que chama função ao elemento HTML ao ser clicado.
// titulo.addEventListener("click", function(){ console.log("Teste") }); => Outra forma de chamar função em Evento Javascript(Função anônima), sem nome de função

