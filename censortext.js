var censoredwords=["bad","sad","mad"];
var customcensoredwords=[];
function censor(text)
{
	for(index in censoredwords){
		text=text.replace(censoredwords[index],"****");
	}
	for(index in custoncensoredwords){
		text=text.replace(customcensoredwords[index],"*****");
	}
	return text;
}
function getcensoredwords(){
	return censoredwords.concat(customcensoredwords);
}
function addcensoredword(word){
	customcensoredwords.push(word);
}
exports.censor=censor;
exports.getcensoredwords=getcensoredwords;
exports.addcensoredword=addcensoredword;
