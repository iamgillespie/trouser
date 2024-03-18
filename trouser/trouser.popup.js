document.getElementById("mkTrouser").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (tab && tab.url.includes("youtube.com/shorts/")) {
        const newUrl = tab.url.replace("youtube.com/shorts/", "youtube.com/video/");
        const mkTrouserLink = document.getElementById("mkTrouser"); // Get the link element
        if (mkTrouserLink) {
          mkTrouserLink.href = newUrl // Set the new URL as the link's href
          document.getElementById("trouserLinkText").innerHTML = "Your link is ready!";
          //mkTrouserLink.textContent = "Your new link is ready!";
        } else {
          console.error("Element with id 'mkTrouser' not found.");
        }
      } else {
        console.log("Current tab is not a Youtube Shorts URL.");
      }
    });
  });
  

/*
document.getElementById("mkTrouser").addEventListener("click", function() {
    chrome.runtime.sendMessage({ action: "redirectShorts" });
});

*/