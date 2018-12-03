var json2html = require('node-json2html');
var fs = require('fs');

 
var t = {'<>':'div','html':'${NFe}'};

nota = JSON.parse(fs.readFileSync('nota1.json', 'utf8'));

var html = json2html.transform(nota,t);
console.log(html);

fs.writeFile("/", html, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 