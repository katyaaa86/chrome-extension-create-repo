function doStuffWithDom() {
    console.log('The repo was created');
}

chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.create({url: 'https://github.com/new'}, async tab => {
        chrome.tabs.onUpdated.addListener(function listener (tabId, info) {
            if (info.status === 'complete' && tabId === tab.id) {
                chrome.tabs.sendMessage(tab.id, {text: 'create_repo'}, doStuffWithDom);
        };
    });
});
});
   