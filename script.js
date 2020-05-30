(function()
{
	var names=["paul","risly","joe","jaison","franko","dora","jimmy","sana","john"];
	for(var i=0;i<names.length;i++){
		var firstletter=names[i].charAt(0).toLowerCase();
		if(firstletter=="j"){
			byespeaker.hello(names[i]);
		}else {
			hellospeaker.hello(names[i]);
		}
	}
})();