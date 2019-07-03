
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.executeScript({file: "src/jquery-1.10.2.min.js"}, function(result) {
        chrome.tabs.executeScript({file: "src/discount.js"}, function(result) {
        });
    });
});

