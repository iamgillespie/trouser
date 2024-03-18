// background script (background.js)
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "updateUrl") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let tab = tabs[0];
        if (tab.url.includes("youtube.com/shorts/")) {
          let newUrl = tab.url.replace("youtube.com/shorts/", "youtube.com/video/");
          chrome.tabs.update(tab.id, { url: newUrl });
        }
      });
    }
  });
  