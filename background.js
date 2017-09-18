/*chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "content.js"});
});
*/


chrome.tabs.onUpdated.addListener(function (){
  
  chrome.tabs.executeScript(tabId, { file: "content.js" });
  chrome.extension.sendMessage({text:"sent"},function(response){
    console.log(response);
  })
})
