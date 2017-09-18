$(document).ready(function(){

function findTitles(){
  var list = document.querySelectorAll('#video-title');
  console.log(list);

  list.forEach(function(data){
    var title = data.title;
    var apiCall = "https://api.uclassify.com/v1/uClassify/topics/classify/?readKey=eOyJjSufg0Ck&text=" + title;
      console.log(apiCall);
      $.getJSON(apiCall,function(json){
        console.log(json.Science);

        if(json.Science < 0.4){
          //console.log(data.parentElement.parentElement.parentElement.parentElement);
          var child = data.parentElement.parentElement.parentElement.parentElement;
          //console.log(child);
          var parent = child.parentElement;
          parent.removeChild(child);
        }

      });



});

}

chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
  //setTimeout(findTitles,2500);
})
setTimeout(findTitles,3000);

})
