var fs = require('fs');

//Carregamento e abertura das notas
var nota = [];
nota[0] = JSON.parse(fs.readFileSync('nota1.json', 'utf8'));
nota[1] = JSON.parse(fs.readFileSync('nota2.json', 'utf8'));
nota[2] = JSON.parse(fs.readFileSync('nota3.json', 'utf8'));
nota[3] = JSON.parse(fs.readFileSync('nota4.json', 'utf8'));
nota[4] = JSON.parse(fs.readFileSync('nota5.json', 'utf8'));
nota[5] = JSON.parse(fs.readFileSync('nota6.json', 'utf8'));


//Array de preços para ordenar posteriormente
var price = [];
var prod = [];


//Pega os dados dos arquivos JSON
for (i in nota){
	if (nota[i].NFe.infNFe.det.prod != undefined){
		price.push(parseFloat(nota[i].NFe.infNFe.det.prod.vProd));
		prod.push(nota[i].NFe.infNFe.det.prod.xProd);
	}
	else{
		obj = nota[i].NFe.infNFe.det;
		for (i in obj){
			price.push(parseFloat(obj[i].prod.vProd));
			prod.push(obj[i].prod.xProd);
		}
	}
}

//Ordena os preços em ordem decrescente

for (i in prod){
	prod[i] = "Produto: " + prod[i] + " --- Preço: R$" + price[i];
	
}

//Ordena o array de preços
price.sort(function compare(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
});
prod_sorted = [];


//Ordena os produtos em ordem de preço
for (i in prod){
	for (j in prod){
		if (prod[j].includes(price[i])){
			prod_sorted.push(prod[j]);
		}
	}
	console.log(prod_sorted[i]);
}