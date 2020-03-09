var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida nutricionista';

	// Acessando as linhas da tabela e armazenando conteúdos de TDs em variáveisdo primeiro paciente

var paciente = document.querySelector('#primeiro-paciente'); 
var tdPeso = paciente.querySelector('.info-peso');           
var tdAltura = paciente.querySelector('.info-altura');	     	
var tdImc = paciente.querySelector('.info-imc');
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
tdImc.textContent = imc
console.log(imc);	
}
