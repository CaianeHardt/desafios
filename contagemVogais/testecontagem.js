const vogais = ["a", "e", "i", "o", "u"]

let numeroDeVogais = function(arr) {
	var resultado = []
	for (var i = 0; i < arr.length; i++) {
		var cont = 0
		var palavra = arr[i].split("")
		for (var j = 0; j < palavra.length; j++) {
			for (var k = 0; k < vogais.length; k++) {
				if (palavra[j] == vogais[k]) {
					cont++
				}
			}
		}
		resultado[i] = cont
	}
	console.log(resultado)
	return resultado
}

numeroDeVogais(["abacaxi", "banana", "caju"])

numeroDeVogais(["raphael", "caiane"])

numeroDeVogais(["romeu", "julieta", "batman", "robin"])