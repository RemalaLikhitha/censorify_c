var censorify=require("censorify_becbapatla");
console.log(censorify.censor("bad,sad, and mad"));
console.log(censorify.getCensoredWords());
censorify.addCensoredWord("gloomy");
console.log(censorify.censor("it's a gloomy day"));