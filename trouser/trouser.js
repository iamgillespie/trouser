chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => 
{
    if (changeInfo.url && tab.url.includes("youtube.com/shorts/")) {
      let newUrl = tab.url.replace("youtube.com/shorts/", "youtube.com/video/");
      //chrome.tabs.update(tabId, { url: newUrl });
    }
  });
