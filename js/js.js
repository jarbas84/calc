
function calcular(tipo1, tipo2){
var i = 0
var tamanho = document.getElementById("visor").value.length
var ultimoDigito = document.getElementById("visor").value.charAt(tamanho - 1)

/*---------------------------INICIO IF ACAO------------------------------------*/
	if(tipo1 == "acao"){

		if(tipo2 == "c"){
		document.getElementById("visor").value = " "
		
		}
/*---------------------------FIM ACAO------------------------------------*/

/*---------------------------------INICIO OPERADORES--------------------------------------------------*/		
		if(tipo2 === "+" ||tipo2 === "-" ||tipo2 === "*" ||tipo2 === "/"){

			if(ultimoDigito == "" || ultimoDigito == " " || ultimoDigito == undefined || ultimoDigito == null || ultimoDigito == -1 ){
				document.getElementById("visor").value = "0"
			}
						
			
			if(tipo2 === ultimoDigito){

			}else if(ultimoDigito === "+" ||ultimoDigito === "-" ||ultimoDigito === "*" ||ultimoDigito === "/"){

			}else if(ultimoDigito == "="){
			document.getElementById("visor").value = ""
			document.getElementById("visor").value += "0"+tipo2	
			}else{
				document.getElementById("visor").value += tipo2		
			}/*fim else*/
			
		}/*fim if*/
/*---------------------------------FIM OPERADORES--------------------------------------------------*/
/*---------------------------------INICIO IGUAL--------------------------------------------------*/
		if(tipo2 == "="){
			if(ultimoDigito == "+" || ultimoDigito == "-" || ultimoDigito == "*" || ultimoDigito == "/"){
				document.getElementById("visor").value += "0"
				var valor_campo = eval(document.getElementById("visor").value)
				document.getElementById("visor").value = valor_campo+"="
			}else{

			var valor_campo = eval(document.getElementById("visor").value)
			document.getElementById("visor").value = valor_campo+"="

			}
		
		
		}
/*--------------------------------FIM IGUAL--------------------------------------------------*/
/*---------------------------INICIO PONTO------------------------------------*/
		if(tipo2 == "."){
			
			var ponto = []
			var atributo = []
				
			while(i < tamanho)
				{
				
				n = document.getElementById("visor").value.charAt(i)
				
				if(n == "."){
					ponto.push({texto: "ponto"})
					i = i+1
				}else{
					
					if(n == "+" || n == "-" || n == "*" || n == "/"){
						atributo.push(i)
					
					}
						i = i+1
				}
			}/*fim do while*/
				
				

				if(ponto.length >= 1 && atributo.length < 1){

				}else{
					
					var m = atributo[atributo.length-1]
					while(m < tamanho)
							{
							
							n = document.getElementById("visor").value.charAt(m)
							
							if(n == "."){
								m++
								return false
							}else if(ultimoDigito =="."){
								m++
								return false
							}
							m++
						}/*fim do while*/

					if(ultimoDigito == "" ||ultimoDigito == undefined || ultimoDigito == null || ultimoDigito == "+" || ultimoDigito == "-" || ultimoDigito == "/" || ultimoDigito == "*" ){
						document.getElementById("visor").value += "0"+tipo2
					}else if(ultimoDigito == "0" || ultimoDigito == "1" || ultimoDigito == "2" || ultimoDigito == "3" || ultimoDigito == "4" || ultimoDigito == "5" || ultimoDigito == "6" || ultimoDigito == "7" || ultimoDigito == "8" || ultimoDigito == "9"){
						document.getElementById("visor").value += tipo2
					}

				}
		
		}
/*---------------------------FIM PONTO------------------------------------*/
/*---------------------------INICIO DIVISAO POR ZERO------------------------------------*/
	
	if(document.getElementById("visor").value == "Infinity"){
			document.getElementById("visor").value = "Matematicamente Infinito"
		}
	}/*---------------------------FIM IF AÇÃO------------------------------------*/
/*---------------------------FIM DIVISAO POR ZERO------------------------------------*/
/*---------------------------INICIO VALOR------------------------------------*/	
	if(tipo1 == "valor")
	{
		if(ultimoDigito == "o"){
			document.getElementById("visor").value = ""
			document.getElementById("visor").value += tipo2	
		}else if(ultimoDigito == "="){
			document.getElementById("visor").value = ""
			document.getElementById("visor").value += tipo2	
		}else{
			document.getElementById("visor").value += tipo2	
		}
		
		
	}
/*---------------------------FIM VALOR------------------------------------*/
}/*---------------------------FIM FUNCAO CALCULAR------------------------------------*/