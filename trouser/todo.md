# Creating a Chrome Extension to Alter URLs

## 1. Set up your development environment:
   - Install a code editor like Visual Studio Code.
   - Install Node.js and npm (Node Package Manager) if you haven't already.

## 2. Create a new directory for your extension:
   - Create a new folder for your extension project.

## 3. Create manifest.json file:
   - Create a `manifest.json` file in your extension directory.
   - Define the basic structure of your extension including its name, version, permissions, and background scripts.

## 4. Create background script:
   - Create a `background.js` file in your extension directory.
   - Add code to listen for tab URL changes and modify the URL as needed.

## 5. Create popup HTML and script (optional):
   - If you want to create a popup that allows users to interact with your extension, create a `popup.html` file and a corresponding `popup.js` file.
   - Add an action button to your `manifest.json` file to specify the popup.

## 6. Load your extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable Developer mode.
   - Click on "Load unpacked" and select the directory where your extension files are located.

## 7. Test your extension:
   - Open a new tab and visit a page that includes "example.com" in the URL.
   - Your extension should detect the URL change and modify it.

## 8. Refine and publish your extension (optional):
   - Test your extension thoroughly.
   - Refine your extension based on user feedback.
   - If you're satisfied, consider publishing it to the Chrome Web Store.