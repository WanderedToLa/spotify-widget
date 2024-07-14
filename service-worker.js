chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      files: ['dist/contentScript.js'],
    },
    () => {
      chrome.tabs.sendMessage(tab.id, { action: 'toggleSidebar' });
    }
  );
});
