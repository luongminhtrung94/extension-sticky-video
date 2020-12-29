chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.sendMessage(tab.id, { text: 'picture-in-picture' }, function () {})
});