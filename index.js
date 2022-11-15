var Typer={text: null,accessCountimer:null,index:0,speed:2,file:"",accessCount:0,deniedCount:0,init: function(){accessCountimer=setInterval(function(){Typer.updLstChr();},500);$.get(Typer.file,function(data){Typer.text=data;Typer.text = Typer.text.slice(0, Typer.text.length-1);});},

function replaceUrls(text) {var http = text.indexOf("http://");var space = text.indexOf(".me ", http);

Typer.speed=3;Typer.file="[Alex].txt"; // add your own name hereTyper.init();
                            
var timer = setInterval("t();", 30);function t() {Typer.addText({"keyCode": 123748});
