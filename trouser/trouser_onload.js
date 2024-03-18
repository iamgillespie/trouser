const mkTrouserLink = document.getElementById("mkTrouser");
const trouserTextDiv = document.getElementById("trouserText");
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  if (tab && tab.url.includes("youtube.com/shorts/")) {
    const newUrl = tab.url.replace("youtube.com/shorts/", "youtube.com/video/");
    trouserTextDiv.textContent = "Your link is ready!";
    if (mkTrouserLink) {
      mkTrouserLink.href = newUrl;
    } else {
      console.error("Element with id 'mkTrouser' not found.");
    }
  }
});