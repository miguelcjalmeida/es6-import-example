import {Writter} from './writer'

var outputElement = document.querySelector('#output')

let writter = new Writter(outputElement);

writter.write("cool!");
writter.write("this");
writter.write("is");
writter.write("working");