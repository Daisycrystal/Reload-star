chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.getAllInWindow(null, function(tabs){
    for (var i = 0; i < tabs.length; i++) { 
	chrome.tabs.reload(tabs[i].id);
    }
});
});

