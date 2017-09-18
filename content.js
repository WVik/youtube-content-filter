$(document).ready(function(){


function getElements(){
	var list = document.querySelectorAll('#video-title');
	console.log(list);


	list.forEach(function(data){
		var title = data.title;
		var apiCall = "https://api.uclassify.com/v1/uClassify/topics/classify/?readKey=eOyJjSufg0Ck&text=" + title;
			console.log(apiCall);
	    $.getJSON(apiCall,function(json){
	    	console.log(json.Science);

	    	if(json.Science < 0.4)
	    		//console.log(data.parentElement.parentElement.parentElement.parentElement);
	    		var child = data.parentElement.parentElement.parentElement.parentElement;
	    		console.log(child);
	    		var parent = child.parentElement;
	    		parent.removeChild(child);
	    });


});
};

setTimeout(getElements,2000);

})


/*chrome.storage.sync.get('extent',function(data){
	console.log(data);
});*/
//console.log(list);

/*
list.forEach(function(data){
	var title = data.title;
	var apiCall = "https://api.uclassify.com/v1/uClassify/topics/classify/?readKey=eOyJjSufg0Ck&text=" + title;
		console.log(apiCall);
    $.getJSON(apiCall,function(json){
    	console.log(json.Science);

    	if(json.Science < 0.4)
    		//console.log(data.parentElement.parentElement.parentElement.parentElement);
    		var child = data.parentElement.parentElement.parentElement.parentElement;
    		console.log(child);
    		var parent = child.parentElement;
    		parent.removeChild(child);
    });





})
*/
