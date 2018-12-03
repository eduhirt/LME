var json2html = require('node-json2html');
var fs = require('fs');
var css2json = require('css2json')

//NFe.infNFe.dest


var jsonMarkup = require('json-markup');
var styleFile = css2json(fs.readFileSync('style.css', 'utf8'));
var html = jsonMarkup(JSON.parse(fs.readFileSync('nota6.json', 'utf8')), styleFile);


fs.writeFile("nota6.html", html, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});









/*
 
var t = {'<>':'div','class':'xml','html':[
					{'<>':'h2','text': 'Comprador:'},
                    {'<>':'p','text': '${NFe.infNFe.dest.xNome}'}
                ]
        };
		

nota = JSON.parse(fs.readFileSync('nota1.json', 'utf8'));

var html = json2html.transform(nota,t);
console.log(html);







fs.writeFile("nota.html", html, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
*/