(function(window){
	var byespeaker={};
	var speakword="good bye  ";
	byespeaker.hello=function(name){
	console.log(speakword+""+name);
	}
	window.byespeaker=byespeaker;
}
)(window);