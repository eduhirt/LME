var fs = require('fs');
var css2json = require('css2json')
var jsonMarkup = require('json-markup');


var styleFile = css2json(fs.readFileSync('style.css', 'utf8'));
var html = jsonMarkup(JSON.parse(fs.readFileSync('nota6.json', 'utf8')), styleFile);


fs.writeFile("nota6.html", html, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

