export function Writter(outputElement){
    this.outputElement = outputElement;
}

Writter.prototype.write = function(text){
    this.outputElement.innerHTML += text;
}