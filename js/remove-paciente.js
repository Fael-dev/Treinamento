//===========================================================
     // SEPARAR ESSE BLOCO DE CÓDIGO ABAIXO EM OUTRO ARQUIVO REMOVER-PACIENTES.JS
     //===========================================================
	
	/* ================================================================
	var pacientes = document.querySelectorAll(".paciente");

	pacientes.forEach(function(paciente){
		paciente.addEventListener("click", function(){
			console.log("Fui clicado com duplo click");
			this.remove(); //THIS está atrelado ao elemento que sofre o evento, no caso o `paciente`
		});
		
	}); event.target.remove(); => remove apenas a TD
	====================================================================== */
	
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.addEventListener("click", function(event){
	
		event.target.parentNode.classList.add("fedeOut");
	
		setTimeout(function(){
			event.target.parentNode.remove();
		}, 500);
	});

	// event target seleciona o elemento filho que foi clicado(TD) e o 										// parentNode seleciona o pai do elemento (TR)
