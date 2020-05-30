(function(window){
	var hellospeaker={};
	var speakword="hello  ";
	hellospeaker.hello=function(name){
	console.log(speakword+""+name);
	}
	window.hellospeaker=hellospeaker;
}
)(window);