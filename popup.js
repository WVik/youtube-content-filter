
/*$('.extent-submit').click(function(){
  var text = $('.extent').val();
  console.log(text);
  var num = parseInt(text);
  console.log(num);
  chrome.storage.sync.set({'extent':num},function(){
    message('Settings Saved!');
  })
});

*/
$('.revert').click(function(){
  alert("Hello!");
  chrome.runtime.sendMessage({ undo: true });
})
